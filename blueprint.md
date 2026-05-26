# Project Blueprint

## Overview

A simple web application with a secure, server-side login feature using Firebase Functions.

## Current State

*   **index.html**: Basic HTML structure with a login form.
*   **style.css**: Styles for the login form.
*   **main.js**: Contains client-side logic that sends login credentials to a serverless function.
*   **functions/index.js**: A Firebase Function that securely handles user authentication.

## Plan for Secure Authentication

1.  **Firebase Functions Setup**: Create a directory named `functions` to house the server-side code.
2.  **Backend Logic (`functions/index.js`)**:
    *   Create an HTTP-triggered Firebase Function.
    *   This function will receive the username and password from the client.
    *   It will securely validate the credentials against the stored values (`kuce_connect` and `korea1905`). The validation logic is never exposed to the client.
    *   It will return a JSON response indicating whether the login was successful or not.
3.  **Client-Side Logic (`main.js`)**:
    *   Remove the insecure, hardcoded username and password validation.
    *   On form submission, use the `fetch` API to send a POST request containing the user's input to the Firebase Function endpoint.
    *   Process the JSON response from the function and display the appropriate "success" or "error" message to the user.
4.  **Configuration**: Configure the project to correctly deploy both the web app (Firebase Hosting) and the authentication logic (Firebase Functions).
