import {UUID} from "node:crypto";
import {OwnedRacket} from "./OwnedRacket";
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
  racketDetails: OwnedRacket,
  crosses: StringEntity,
  mains: StringEntity,
  provider: User
}
