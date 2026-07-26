import { useCallback, useEffect, useState } from 'react';
import { DAILY_FREE_LIMIT } from '@/lib/constants';

const STORAGE_KEY = 'pixora:usage';

interface UsageState {
  date: string;
  count: number;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readUsage(): UsageState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: todayKey(), count: 0 };
    const parsed = JSON.parse(raw) as UsageState;
    if (parsed.date !== todayKey()) return { date: todayKey(), count: 0 };
    return parsed;
  } catch {
    return { date: todayKey(), count: 0 };
  }
}

export function useRateLimit() {
  const [usage, setUsage] = useState<UsageState>({ date: todayKey(), count: 0 });

  useEffect(() => {
    setUsage(readUsage());
  }, []);

  const remaining = Math.max(0, DAILY_FREE_LIMIT - usage.count);
  const limitReached = usage.count >= DAILY_FREE_LIMIT;

  const registerUsage = useCallback(() => {
    const current = readUsage();
    const next = { date: todayKey(), count: current.count + 1 };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setUsage(next);
  }, []);

  return { remaining, limitReached, used: usage.count, total: DAILY_FREE_LIMIT, registerUsage };
}
