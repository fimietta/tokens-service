# A Node TokenService
TokenService skeleton

## Pre-requisites

Install a recent version of [Node.js and Node package manager (npm)](http://nodejs.org) via your preferred method.

## Setup

In the project directory, launch:

    npm install

You'll need to do this once or when dependencies change.

## Run

## Start the service

in development mode

    npm run serve


in production mode:

    npm start

## Test

Jshint checking ant tests:

    npm test

## CURL example

    curl -X "DELETE" http://localhost:9001/api/tokens/5617a9d8cb165221958495eb

    curl -H "Content-Type: application/json" -X POST -d '{"TokenRequest":{"content": "A NEW TOKEN","type": "passwordreset","expirydate": "10-10-2014Z10:00","useruuid": "326776"}}' http://localhost:9001/api/tokens
