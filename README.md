# uru-frameworks-clocks-app

An Angular 19 app that shows the current time on ten different clock faces, behind Firebase authentication. Built for the Frameworks course at Universidad Rafael Urdaneta.

**Note:** This repository is archived and read-only.

## Features

- **Clock faces** — Abacus, analog, binary, digital, Morse code, mosaic, RGB, Roman, seven-segment and triple-orbit, each on its own `/clocks/<name>` route.
- **Authentication** — Sign in and sign up with email and password or Google through Firebase Auth. Clock routes are protected by an auth guard; `/sign-in` and `/sign-up` by a not-auth guard.

## Development

```bash
npm install
ng serve        # http://localhost:4200/
ng build        # output in dist/
ng test         # Karma unit tests
```

The auth service imports Firebase settings from a `config` module at the repository root (`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`). That file is not committed, so you must create it with your own Firebase project values before the app compiles.

## Project structure

- **`src/app/features/auth`** — Guards, auth layout, sign-in and sign-up pages, auth service.
- **`src/app/features/clocks`** — Clock components, pages, layout and time service.
- **`src/app/shared`** — Reusable button, input, label and slider components, and the not-found page.

Generated with Angular CLI 19.2.1; see the [Angular CLI reference](https://angular.dev/tools/cli) for `ng generate` and other commands.

## License

GPL-3.0. See [LICENSE](LICENSE).
