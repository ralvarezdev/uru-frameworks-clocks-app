import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import helmet from "helmet";
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {environment} from './environment';
import cookieParser from 'cookie-parser'
// @ts-ignore
import {ErrorHandler, HandleValidation, FieldFailError, SuccessJSendBody} from '@ralvarezdev/js-express'
// @ts-ignore
import {Validate} from '@ralvarezdev/js-joi-parser'
import Joi from 'joi';
import {isDevMode} from '@angular/core';
import {FirebaseError} from '@firebase/util';

// Constants
const PORT = process.env['URU_FRAMEWORKS_CLOCKS_API_PORT']
const COOKIE_ACCESS_TOKEN_NAME = environment['COOKIE_ACCESS_TOKEN_NAME']
const COOKIE_ACCESS_TOKEN_MAX_AGE = parseInt(environment['COOKIE_ACCESS_TOKEN_MAX_AGE'])

// Initialize Firebase
initializeApp({
  apiKey: environment['FIREBASE_API_KEY'],
  authDomain: environment['FIREBASE_AUTH_DOMAIN'],
  projectId: environment['FIREBASE_PROJECT_ID'],
  storageBucket: environment['FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: environment['FIREBASE_MESSAGING_SENDER_ID'],
  appId: environment['FIREBASE_APP_ID'],
  measurementId: environment['FIREBASE_MEASUREMENT_ID']
});

// Get the Auth service
const auth = getAuth();

// Google Sign-In
const provider = new GoogleAuthProvider();

// Resolve the paths to the server and browser distribution folders
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

// Create a cookie with the user ID
function createCookieWithUserId(res: any, userId: string) {
  res.cookie(COOKIE_ACCESS_TOKEN_NAME, userId, {
    httpOnly: true,
    secure: !isDevMode(),
    maxAge: COOKIE_ACCESS_TOKEN_MAX_AGE * 1000,
  });
}

/**
 * Create an Express application and an AngularNodeAppEngine instance.
 * The AngularNodeAppEngine is used to render the Angular application.
 */
const app = express();
const angularApp = new AngularNodeAppEngine();
const errorHandler = new ErrorHandler();

// Add the cookie parser middleware
app.use(cookieParser())

// Add the body parser middleware
app.use(express.json())

// Add the error JSON body parser handler middleware
app.use(errorHandler.errorJSONBodyParserCatcher())

// Add the url encoded body parser middleware
app.use(express.urlencoded({extended: true}));

// Add Helmet middleware for security
app.use(helmet());

/**
 * Sign up a new user with email and password
 */
app.post('/api/sign-up', async (req, res, next) => {
  // Validate the request
  const {email, password} = HandleValidation(req,
    res,
    (req: any) => Validate(
      req,
      Joi.object({
        password: Joi.string().required().min(1),
        email: Joi.string().email().required().email(),
      })
    )
  );

  try {
    // Create the user with email and password
    await createUserWithEmailAndPassword(auth, email, password)

    // Send the success response
    res.status(200).json(SuccessJSendBody())
  } catch(error) {
    const firebaseError = error as FirebaseError;

    if (firebaseError?.code==='auth/email-already-in-use' || firebaseError?.code==='auth/invalid-email')
      error = FieldFailError(400, 'email', firebaseError?.message)
    else if (firebaseError?.code==='auth/weak-password')
      error = FieldFailError(400, 'password', firebaseError?.message)

    // Continue with the error
    next(error)
  }
});

/*
 * Sign in a user with email and password
 */
app.post('/api/sign-in', async (req, res, next) => {
  // Validate the request
  const {email, password} = HandleValidation(req,
    res,
    (req: any) => Validate(
      req,
      Joi.object({
        password: Joi.string().required().min(1),
        email: Joi.string().email().required().email(),
      })
    )
  );

  try {
    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    // Create a cookie with the user ID
    createCookieWithUserId(res, userCredential.user.uid)

    // Send the success response
    res.status(200).json(SuccessJSendBody())
  } catch (error) {
    const firebaseError = error as FirebaseError;

    if (firebaseError?.code === 'auth/user-not-found' || firebaseError?.code === 'auth/invalid-email')
      error = FieldFailError(401, 'email', firebaseError?.message)
    else if (firebaseError?.code === 'auth/wrong-password')
      error = FieldFailError(401, 'password', firebaseError?.message)

    // Continue with the error
    next(error)
  }
})

/*
 * Sign in a user with Google
 */
app.post('/api/sign-in/google', async (req, res, next) => {
  try {
    // Sign in the user with Google
    const userCredential = await signInWithPopup(auth, provider)

    // Create a cookie with the user ID
    createCookieWithUserId(res, userCredential.user.uid)

    // Send the success response
    res.status(200).json(SuccessJSendBody())
  } catch (error) {
    // Continue with the error
    next(error)
  }
})

/*
 * Sign out the user and remove the cookie
 */
app.post('/api/sign-out', async (req, res, next) => {
  // Sign out the user
  try {
    await signOut(auth)

    // Clear the user ID cookie
    res.clearCookie(COOKIE_ACCESS_TOKEN_NAME)

    // Send the success response
    res.status(200).json(SuccessJSendBody())
  } catch (error) {
    // Continue with the error
    next(error)
  }
})

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Add the error catcher middleware
app.use(errorHandler.errorCatcher())

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
