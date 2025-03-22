import { Injectable } from '@angular/core';
//import {environment} from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fetch(relativePath: string, body?: any) {
    // environment['HOST']
    return fetch( 'http://localhost:8080/api'+ relativePath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}
