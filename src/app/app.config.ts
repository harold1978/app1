import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'app-p0ll1t0',
        appId: '1:208055545903:web:66dbd45544dd2cb08996da',
        storageBucket: 'app-p0ll1t0.firebasestorage.app',
        apiKey: 'AIzaSyAhk82MgpRf0u9DufY3asWey0enZ35sqcQ',
        authDomain: 'app-p0ll1t0.firebaseapp.com',
        messagingSenderId: '208055545903',
        measurementId: 'G-Q1K825PEM1',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
