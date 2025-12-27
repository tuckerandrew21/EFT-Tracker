/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck - React 19 Context Provider component type compatibility
"use client";

import { createContext, useContext } from "react";
import { useUserPrefs } from "@/hooks/useUserPrefs";
import type { UserPrefs } from "@/hooks/useUserPrefs";
import type { ReactNode } from "react";

interface UserPrefsContextValue {
  prefs: UserPrefs | null;
  isLoading: boolean;
  error: Error | null;
}

const UserPrefsContext = createContext<UserPrefsContextValue | undefined>(
  undefined
);

interface UserPrefsProviderProps {
  children: ReactNode;
}

export function UserPrefsProvider({
  children,
}: UserPrefsProviderProps): JSX.Element {
  const { data, isLoading, error } = useUserPrefs();

  const value: UserPrefsContextValue = {
    prefs: data ?? null,
    isLoading,
    error: error as Error | null,
  };

  return (
    <UserPrefsContext.Provider value={value}>
      {children}
    </UserPrefsContext.Provider>
  );
}

export function useUserPrefsContext(): UserPrefsContextValue {
  const context = useContext(UserPrefsContext);
  if (context === undefined) {
    throw new Error("useUserPrefsContext must be used within UserPrefsProvider");
  }
  return context;
}
