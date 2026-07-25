import { shuffle } from "./shuffle.ts"

export function pickOnce<T>(pool: T[], count: number): T[] {
   return shuffle(pool).slice(0, count)
}