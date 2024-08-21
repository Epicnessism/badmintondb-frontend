import {UUID} from "node:crypto";
import {Racket} from "./Racket.model";
import {User} from "./User";
import {StringEntity} from "./StringEntity";

export interface Stringing {
  stringingId: UUID,
  status: string,
  completed: boolean,
  completedTimestamp: Date,
  requestedTimestamp: Date,
  lastUpdatedTimestamp: Date,
  price: number,
  notes: string,
  racketDetails: Racket,
  crosses: StringEntity,
  mains: StringEntity,
  provider: User
}
