import {Routes} from '@angular/router';
import {SignInPageComponent} from './features/auth/pages/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from './features/auth/pages/sign-up-page/sign-up-page.component';
import {AbacusPageComponent} from './features/clocks/pages/abacus-page/abacus-page.component';
import {AnalogPageComponent} from './features/clocks/pages/analog-page/analog-page.component';
import {BinaryPageComponent} from './features/clocks/pages/binary-page/binary-page.component';
import {DigitalPageComponent} from './features/clocks/pages/digital-page/digital-page.component';
import {TripleOrbitPageComponent} from './features/clocks/pages/triple-orbit-page/triple-orbit-page.component';
import {SevenSegmentPageComponent} from './features/clocks/pages/seven-segment-page/seven-segment-page.component';
import {MorseCodePageComponent} from './features/clocks/pages/morse-code-page/morse-code-page.component';
import {MosaicPageComponent} from './features/clocks/pages/mosaic-page/mosaic-page.component';
import {RgbPageComponent} from './features/clocks/pages/rgb-page/rgb-page.component';
import {RomanPageComponent} from './features/clocks/pages/roman-page/roman-page.component';
import {NotFoundPageComponent} from './shared/pages/not-found-page/not-found-page.component';
import {NotAuthGuard} from './features/auth/guards/not-auth.guard';
import {AuthGuard} from './features/auth/guards/auth.guard';

export const routes: Routes = [
  {path: 'sign-in', component: SignInPageComponent, canActivate: [NotAuthGuard]},
  {path: 'sign-up', component: SignUpPageComponent, canActivate: [NotAuthGuard]},
  {path: 'clocks/abacus', component: AbacusPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/analog', component: AnalogPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/binary', component: BinaryPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/digital', component: DigitalPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/triple-orbit', component: TripleOrbitPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/seven-segment', component: SevenSegmentPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/morse-code', component: MorseCodePageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/mosaic', component: MosaicPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/rgb', component: RgbPageComponent, canActivate:[AuthGuard]},
  {path: 'clocks/roman', component: RomanPageComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent},
];
