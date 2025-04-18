import {UUID} from "node:crypto";

export interface Racket {
  racketId: UUID,
  make: string,
  model: string
}
