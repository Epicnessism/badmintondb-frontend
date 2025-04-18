import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../interfaces/LoginResponse";
import {LoginRequest} from "../interfaces/LoginRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:8080"
  private postLogin: string = '/auth/signin'

  constructor(private http:HttpClient) { }

  userLogin(body: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + this.postLogin, body, {headers: {"Content-Type": "application/json"}})
  }
}
