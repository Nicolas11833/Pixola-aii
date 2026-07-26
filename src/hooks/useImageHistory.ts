import { useCallback, useEffect, useState } from 'react';
import { GeneratedImage } from '@/types';

const STORAGE_KEY = 'pixora:history';
const MAX_ITEMS = 60;

function readStorage(): GeneratedImage[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GeneratedImage[]) : [];
  } catch {
    return [];
  }
}

export function useImageHistory() {
  const [history, setHistory] = useState<GeneratedImage[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHistory(readStorage());
    setHydrated(true);
  }, []);

  const persist = useCallback((items: GeneratedImage[]) => {
    setHistory(items);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const addImage = useCallback(
    (image: GeneratedImage) => {
      const next = [image, ...readStorage()].slice(0, MAX_ITEMS);
      persist(next);
    },
    [persist]
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      const next = readStorage().map((img) =>
        img.id === id ? { ...img, favorite: !img.favorite } : img
      );
      persist(next);
    },
    [persist]
  );

  const removeImage = useCallback(
    (id: string) => {
      const next = readStorage().filter((img) => img.id !== id);
      persist(next);
    },
    [persist]
  );

  const clearHistory = useCallback(() => {
    persist([]);
  }, [persist]);

  return {
    history,
    hydrated,
    addImage,
    toggleFavorite,
    removeImage,
    clearHistory,
    favorites: history.filter((img) => img.favorite),
  };
}
