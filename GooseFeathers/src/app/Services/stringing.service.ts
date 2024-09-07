import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserStringings} from "../interfaces/UserStringings.model";
import {CreateStringRequest} from "../interfaces/CreateStringRequest";
import {OwnedRacket} from "../interfaces/OwnedRacket";
import {Racket} from "../interfaces/Racket";

@Injectable({
  providedIn: 'root'
})
export class StringingService {
  private baseUrl: string = "http://localhost:8080";
  private getStringingsByUser: string = '/user/92cba104-c922-4852-a683-b32ffd21b109/stringings'
  private getRacketdModels: string = '/info/racketModels'
  private getStringModels: string = '/info/strings'
  private postCreateStringingRequest: string = '/stringing'

  constructor(private http:HttpClient) { }

  getStringingData(): Observable<UserStringings> {
    //todo figure out options  type
    // const options = {
    //   headers: {
    //   },
    // }
    return this.http.get<UserStringings>(this.baseUrl + this.getStringingsByUser);
  }

  postStringingRequest(body: CreateStringRequest): void {
    this.http.post(this.baseUrl + this.postCreateStringingRequest, body, {headers: {"Content-Type": "application/json"}}).subscribe(data => {
      console.log(data)
    })
  }

  /**
   * Returns a list of all Racket models in the database
   */
  getAllAvailableRacketModels(): Observable<Racket[]> {
    return this.http.get<Racket[]>(this.baseUrl + this.getRacketdModels)
  }
}
