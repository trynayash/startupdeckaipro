import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeBusinessIdea, generatePitchDeck, generateRandomIdea } from "./openrouter";
import { insertValidationSchema, insertUsageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  // Removed: await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Generate random idea endpoint
  app.get('/api/random-idea', async (req, res) => {
    try {
      const idea = await generateRandomIdea();
      res.json({ idea });
    } catch (error) {
      console.error('Error generating random idea:', error);
      res.status(500).json({ message: 'Failed to generate random idea' });
    }
  });

  // Business idea validation endpoint
  app.post('/api/validate-idea', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Check if user can validate (based on plan limits)
      const canValidate = await storage.canUserValidate(userId);
      if (!canValidate) {
        return res.status(403).json({ 
          message: "Validation limit reached. Please upgrade your plan." 
        });
      }

      const { ideaText } = req.body;
      if (!ideaText || typeof ideaText !== 'string') {
        return res.status(400).json({ message: 'Invalid idea text' });
      }

      // Perform AI analysis
      const analysis = await analyzeBusinessIdea(ideaText);
      
      // Generate pitch deck
      const pitchDeckSlides = await generatePitchDeck(analysis, ideaText);

      // Save validation to database
      const validation = await storage.createValidation({
        userId,
        ideaText,
        analysis,
        validationScore: analysis.validationScore,
        marketSize: analysis.marketSize,
        competitionLevel: analysis.competitionLevel,
        targetAudience: analysis.targetAudience,
        strengths: analysis.strengths,
        weaknesses: analysis.weaknesses,
        recommendations: analysis.recommendations,
        pitchDeck: { slides: pitchDeckSlides },
      });

      // Track usage
      await storage.trackUsage({
        userId,
        action: 'validation',
        metadata: { validationId: validation.id }
      });

      // Increment user usage count
      await storage.incrementUserUsage(userId);

      res.json({
        validation,
        analysis,
        pitchDeck: pitchDeckSlides
      });
    } catch (error) {
      console.error('Error validating idea:', error);
      res.status(500).json({ message: 'Failed to validate idea' });
    }
  });

  // Get user's validation history
  app.get('/api/validations', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validations = await storage.getUserValidations(userId);
      res.json(validations);
    } catch (error) {
      console.error('Error fetching validations:', error);
      res.status(500).json({ message: 'Failed to fetch validations' });
    }
  });

  // Get specific validation
  app.get('/api/validations/:id', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validationId = parseInt(req.params.id);
      
      const validation = await storage.getValidation(validationId);
      if (!validation || validation.userId !== userId) {
        return res.status(404).json({ message: 'Validation not found' });
      }

      res.json(validation);
    } catch (error) {
      console.error('Error fetching validation:', error);
      res.status(500).json({ message: 'Failed to fetch validation' });
    }
  });

  // Update user plan
  app.post('/api/update-plan', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { plan } = req.body;
      
      if (!['free', 'pro', 'team'].includes(plan)) {
        return res.status(400).json({ message: 'Invalid plan' });
      }

      await storage.updateUserPlan(userId, plan);
      res.json({ message: 'Plan updated successfully' });
    } catch (error) {
      console.error('Error updating plan:', error);
      res.status(500).json({ message: 'Failed to update plan' });
    }
  });

  // Get user usage statistics
  app.get('/api/usage-stats', async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      const usageCount = await storage.getUserUsageCount(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        plan: user.plan,
        usageCount: user.usageCount,
        totalTrackedUsage: usageCount,
        canValidate: await storage.canUserValidate(userId)
      });
    } catch (error) {
      console.error('Error fetching usage stats:', error);
      res.status(500).json({ message: 'Failed to fetch usage stats' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
