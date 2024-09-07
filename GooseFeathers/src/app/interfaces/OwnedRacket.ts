import {UUID} from "node:crypto";
import {User} from "./User";
import {Racket} from "./Racket";

export interface OwnedRacket extends Racket {
  ownerDetails: User
}
