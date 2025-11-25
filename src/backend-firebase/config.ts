"use client";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

let db: Firestore | null = null;

if (typeof window !== "undefined") {
  if (!getApps().length) {
    initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    });
  }
  db = getFirestore();
}

export { db };
