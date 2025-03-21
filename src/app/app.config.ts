import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: environment['FIREBASE_API_KEY'],
        authDomain: environment['FIREBASE_AUTH_DOMAIN'],
        projectId: environment['FIREBASE_PROJECT_ID'],
        storageBucket: environment['FIREBASE_STORAGE_BUCKET'],
        messagingSenderId: environment['FIREBASE_MESSAGING_SENDER_ID'],
        appId: environment['FIREBASE_APP_ID'],
        measurementId: environment['FIREBASE_MEASUREMENT_ID']
      }),
      AngularFireAuthModule
    )
  ]
};
