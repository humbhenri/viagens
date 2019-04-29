# Get started
Create a `firebase.config.ts` with the following contents:
```
const config = {
  apiKey: "<...>",
  authDomain: "curso-pbh-ionic.firebaseapp.com",
  databaseURL: "https://curso-pbh-ionic.firebaseio.com",
  projectId: "curso-pbh-ionic",
  storageBucket: "curso-pbh-ionic.appspot.com",
  messagingSenderId: "<...>"
};

export default config;
```

Get the actual values from api key and messaging sender [here](https://console.firebase.google.com/project/curso-pbh-ionic/overview?hl=pt-br).