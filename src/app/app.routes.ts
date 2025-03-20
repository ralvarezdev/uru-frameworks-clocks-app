import { Routes } from '@angular/router';
import {LoginComponent} from './features/auth/components/login/login.component';
import {SignupComponent} from './features/auth/components/signup/signup.component';
import {AbacusClockComponent} from './features/clocks/components/abacus-clock/abacus-clock.component';
import {AnalogClockComponent} from './features/clocks/components/analog-clock/analog-clock.component';
import {BinaryClockComponent} from './features/clocks/components/binary-clock/binary-clock.component';
import {DigitalClockComponent} from './features/clocks/components/digital-clock/digital-clock.component';
import {LedClockComponent} from './features/clocks/components/led-clock/led-clock.component';
import {MatchClockComponent} from './features/clocks/components/match-clock/match-clock.component';
import {MorseCodeClockComponent} from './features/clocks/components/morse-code-clock/morse-code-clock.component';
import {MosaicClockComponent} from './features/clocks/components/mosaic-clock/mosaic-clock.component';
import {RgbClockComponent} from './features/clocks/components/rgb-clock/rgb-clock.component';
import {RomanClockComponent} from './features/clocks/components/roman-clock/roman-clock.component';
import {DashboardComponent} from './features/dashboard/components/dashboard/dashboard.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {AuthGuard} from './features/auth/guards/auth.guard';
import {NotAuthGuard} from './features/auth/guards/not-auth.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[NotAuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate:[NotAuthGuard]},
  {path: 'clocks/abacus', component: AbacusClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/analog', component: AnalogClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/binary', component: BinaryClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/digital', component: DigitalClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/led', component: LedClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/match', component: MatchClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/morse-code', component: MorseCodeClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/mosaic', component: MosaicClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/rgb', component: RgbClockComponent, canActivate:[AuthGuard]},
  {path: 'clocks/roman', component: RomanClockComponent, canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];
