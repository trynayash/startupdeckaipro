# IdeaValidator - AI-Powered Business Idea Validation Platform

## Overview

IdeaValidator is a full-stack web application that helps entrepreneurs validate their business ideas using AI-powered analysis. The platform provides comprehensive market analysis, competitor insights, and automatic pitch deck generation. It's built as a modern web application with a React frontend and Express backend, designed to be an open-source alternative to proprietary validation tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: TailwindCSS with custom CSS variables for theming and comprehensive responsive design
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production
- **Design System**: Fully responsive mobile-first design with custom utility classes

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon (serverless PostgreSQL)
- **Authentication**: Custom Replit Auth integration with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL storage
- **API Integration**: OpenRouter with DeepSeek model for AI-powered analysis (free tier)

## Key Components

### Database Schema
The application uses a PostgreSQL database with the following main tables:
- `sessions`: Session storage (mandatory for Replit Auth)
- `users`: User profiles and plan information
- `validations`: Business idea validation results and analysis
- `usageTracking`: Usage limits and tracking per user

### Authentication System
- **Provider**: Replit Auth with OpenID Connect
- **Session Management**: PostgreSQL-backed sessions with automatic cleanup
- **User Management**: Automatic user creation/update on login
- **Authorization**: Route-level protection with middleware

### AI Analysis Engine
- **Provider**: OpenRouter with DeepSeek model for business idea analysis (free tier)
- **Features**: Market size estimation, competitor analysis, target audience identification
- **Output**: Structured JSON with validation scores, recommendations, and insights
- **Cost**: Free tier usage through OpenRouter API

### UI Component System
- **Design System**: Shadcn/ui with New York style and custom responsive utilities
- **Theme**: Custom blue-based color palette with glass morphism effects and premium SVG backgrounds
- **Responsive Design**: Comprehensive mobile-first approach with custom utility classes
- **Animation**: CSS animations, gradient animations, and floating elements for enhanced UX
- **Background**: High-quality SVG animated background with startup/tech theme

## Data Flow

1. **User Authentication**: Users log in through Replit Auth, creating/updating user records
2. **Idea Submission**: Users submit business ideas through a form with validation
3. **AI Analysis**: Ideas are processed through OpenAI API for comprehensive analysis
4. **Result Storage**: Analysis results are stored in the database with user association
5. **Pitch Deck Generation**: AI generates structured pitch deck slides based on analysis
6. **Result Display**: Users view analysis dashboard and generated pitch decks

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **openai**: AI analysis integration
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **wouter**: Client-side routing
- **tailwindcss**: Utility-first CSS framework

### Authentication
- **openid-client**: OpenID Connect authentication
- **passport**: Authentication middleware
- **express-session**: Session management
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Production bundling

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: Direct TypeScript execution with tsx
- **Database**: Neon serverless PostgreSQL
- **Environment**: Replit-optimized with custom plugins

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Database**: Drizzle migrations for schema management
- **Deployment**: Node.js server serving both API and static assets

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **OPENROUTER_API_KEY**: OpenRouter API authentication for DeepSeek model
- **SESSION_SECRET**: Session encryption key
- **REPLIT_DOMAINS**: Allowed domains for Replit Auth
- **ISSUER_URL**: OpenID Connect issuer URL

The application follows a monorepo structure with shared schema and utilities, making it easy to maintain and deploy as a single unit while keeping frontend and backend concerns separated.

## Recent Changes

### December 2024 - Major Updates
- **Branding**: Updated from "IdeaValidator" to "StartupDeck" across all components
- **AI Provider**: Switched from OpenAI to OpenRouter with free DeepSeek model
- **Responsive Design**: Complete mobile-first responsive design overhaul
- **Premium Background**: Added high-quality animated SVG background for landing page
- **CSS Architecture**: Implemented comprehensive responsive utility classes
- **Mobile Navigation**: Enhanced mobile navigation with improved UX
- **Component Updates**: All components updated for mobile responsiveness
- **Performance**: Optimized loading and rendering for all device sizes

### Technical Improvements
- Custom responsive utility classes for consistent spacing and typography
- Mobile-first grid system with breakpoint-specific layouts
- Improved button and form responsiveness
- Enhanced mobile navigation with glass morphism effects
- Premium animated SVG background with startup tech theme
- Optimized image sizes and loading for mobile devices