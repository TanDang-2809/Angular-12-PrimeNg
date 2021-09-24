import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';// đường dẫn tới server giả
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient : HttpClient) {}

  public getNotes(authorId :  number): Observable<any>{ //Obvervable trả về 
    const url = `${this.REST_API_SERVER}/notes?authorId=` + authorId;// đường dẫn lấy notes
    // console.log('Cổng 3000 : ',url);//in notes lấy từ đường dẫn url
    return this.httpClient.get<any>(url, this.httpOptions);//gọi lên server và trả về
  }
}
