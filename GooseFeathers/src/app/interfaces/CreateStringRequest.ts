import {UUID} from "node:crypto";
import {RacketToString} from "./RacketToString";

export interface CreateStringRequest {
  stringerId: UUID,
  racketToString: RacketToString,
  isNewRacket: boolean,
  method: string,
  price: number,
  mains: number,
  crosses: number,
  mainsInMeters: number,
  crossesInMeters: number
}
