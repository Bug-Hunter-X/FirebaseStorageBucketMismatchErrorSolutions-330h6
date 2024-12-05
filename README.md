# Firebase Storage Bucket Mismatch Error

This repository demonstrates a common error encountered when using Firebase Storage: a mismatch between the storage bucket specified in your Firebase configuration and the actual bucket used for file storage.

## Problem
The Firebase SDK may throw errors or fail to authenticate if the `storageBucket` value in your `firebase.initializeApp()` configuration does not match the bucket associated with your Firebase project.

## Solution
Ensure the `storageBucket` value in your `firebase.initializeApp()` call exactly matches the storage bucket listed in your Firebase project settings in the console. Verify that you are using the correct `google-services.json` file for your active project.  If you're unsure which bucket to use, you should check your Firebase console to verify your project's storage location.