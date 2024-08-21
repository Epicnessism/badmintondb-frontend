import {UUID} from "node:crypto";

export interface User {
  id: UUID,
  familyName: string,
  givenName: string,
}
