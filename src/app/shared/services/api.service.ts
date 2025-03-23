import { Injectable } from '@angular/core';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fetch(relativePath: string, body?: any) {
    return fetch(config.HOST + relativePath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}
