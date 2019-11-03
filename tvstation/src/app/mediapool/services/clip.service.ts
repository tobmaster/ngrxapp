import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Clip} from '../data/clip';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  list(): Observable<Clip[]> {
    return this.http.get<Clip[]>(`${this.url}/clips`);
  }

  save(clip: Clip) {
    return this.http.post<Clip>(`${this.url}/clips`, clip);
  }

  delete(clip: Clip) {
    return this.http.delete<Clip>(`${this.url}/clips/${clip.id}`);
  }
}
