import {UUID} from "node:crypto";
import {User} from "./User";

export interface Racket {
  id: UUID,
  make: string,
  model: string,
  ownerDetails: User,
}
