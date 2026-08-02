import { random } from "./random.ts"
import { shuffle } from "./shuffle.ts"

export function pickItems<T>(pool: T[], count: number): T[] {
   return shuffle(pool).slice(0, count)
}

export function pickItem<T>(pool: T[]): T {
   return pool[random(0, pool.length - 1)]
}