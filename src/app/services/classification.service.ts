import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headerOptions = {
  headers : new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json'),
};

@Injectable ()
export class ClassificationService {

  constructor(private httpClient: HttpClient) {
  }

  public SDGClassification(text: any){
    return this.httpClient.post<string>('https://services.opix.ai/sdg/sdg_classifier', text, headerOptions);
  }
}
