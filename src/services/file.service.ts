import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) {}

  simularErro() {
    return this.http.get('/api/simular-erro', { observe: 'response' });
  }
}

