import {UUID} from "node:crypto";

export interface RacketToString {
  racketId?: UUID,
  make: string,
  model: string,
  ownerDetails: OwnerDetails
}

export interface OwnerDetails {
  userId?: UUID
}
