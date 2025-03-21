import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {validateEnvironmentKeys} from './environment';

// Validate the environment keys
validateEnvironmentKeys();

// Bootstrap the application with the root component and application configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
