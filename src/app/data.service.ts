import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note.model';


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

  public getNotes(authorId :  number): Observable<Note[]>{ //Obvervable trả về 
    const url = `${this.REST_API_SERVER}/notes?authorId=` + authorId;// đường dẫn lấy notes
    console.log('Cổng 3000 : ',url);//in notes lấy từ đường dẫn url
    return this.httpClient.get<Note[]>(url, this.httpOptions);//gọi lên server và trả về
  }

  public postNote(payload :  any): Observable<Note>{ //Obvervable trả về 
    const url = `${this.REST_API_SERVER}/notes`;// đường dẫn lấy notes
    return this.httpClient.post<Note>(url, payload, this.httpOptions);//gọi lên server và trả về//thêm dữ liệu lên server
  }
}
