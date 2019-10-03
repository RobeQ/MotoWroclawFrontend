import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()

export class RegisterService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:50429/api/registerusers';

  differentPasswords: boolean;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }
}
