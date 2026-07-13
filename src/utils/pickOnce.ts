import { shuffle } from "./shuffle"

export function pickOnce<T>(pool: T[], count: number): T[] {
   return shuffle(pool).slice(0, count)
}