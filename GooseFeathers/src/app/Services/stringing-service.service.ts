import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserStringings} from "../interfaces/UserStringings.model";

@Injectable({
  providedIn: 'root'
})
export class StringingServiceService {
  baseUrl: string = "http://localhost:8080";
  getStringingsByUser: string = '/user/92cba104-c922-4852-a683-b32ffd21b109/stringings'

  constructor(private http:HttpClient) { }

  getStringingData(): Observable<UserStringings> {
    //todo figure out options  type
    // const options = {
    //   headers: {
    //   },
    // }
    return this.http.get<UserStringings>(this.baseUrl + this.getStringingsByUser);
  }
}
