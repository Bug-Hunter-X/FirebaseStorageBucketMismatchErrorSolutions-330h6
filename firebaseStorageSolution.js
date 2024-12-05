Ensure your `firebase.initializeApp()` configuration includes the correct `storageBucket`:

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET", // Correct bucket name!
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// ... rest of your Firebase Storage code
```

Double-check that you are using the correct `google-services.json` file corresponding to your project. If it's still not working, verify your Firebase project setup in the console.