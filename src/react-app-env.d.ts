/// <reference types="react-scripts" />

declare interface xtl {
  murmur2: (s: string, seed: number) => number;
}

declare async function createModule(): Promise<xtl>;