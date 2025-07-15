export interface FreeUsageData {
  hasUsedFreeValidation: boolean;
  usageTimestamp: number;
}

const FREE_USAGE_KEY = 'ideavalidator_free_usage';

export function getFreeUsageData(): FreeUsageData {
  try {
    const data = localStorage.getItem(FREE_USAGE_KEY);
    if (!data) {
      return { hasUsedFreeValidation: false, usageTimestamp: 0 };
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading free usage data:', error);
    return { hasUsedFreeValidation: false, usageTimestamp: 0 };
  }
}

export function setFreeUsageData(data: FreeUsageData): void {
  try {
    localStorage.setItem(FREE_USAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving free usage data:', error);
  }
}

export function markFreeUsageUsed(): void {
  setFreeUsageData({
    hasUsedFreeValidation: true,
    usageTimestamp: Date.now()
  });
}

export function canUseFreeValidation(): boolean {
  const data = getFreeUsageData();
  return !data.hasUsedFreeValidation;
}
