---
title: "List rules on firebase"
slug: rules-firebase
date: 2022-07-19T09:59:23+07:00
lastmod: 2022-07-19T09:59:27+07:00
description: "List rules on firebase"
---
## rules securyti firebase
- allow write, update, delete: if <logic>
logic :
- `true/false` : for everyone
- `match /public/{user}` : rules for db on `public/*`
- `match /{uid}` or `{var}` : for use again on logic
- `request.auth.uid == uid` : only user with uid same on `/{uid}` 
- `get(/databases/$(database)/documents/public/$(user)).data.uid != request.auth.uid;` : get data from user
- `request.auth.uid in resource.data.writer` : only uid same on array on data `writer`
- https://firebase.google.com/docs/firestore/security/rules-fields

```firebase
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function uid(userName) {
  return get(/databases/$(database)/documents/admins/$(userName));
}
function teslah(tes){
  return get(/databases/$(database)/documents/admins/$(tes)).resource.data.username
  }
  /* for user */
  match /usr/{tes=**}{
  match /{username} {
  allow create: if request.auth.uid != null && teslah(tes)
  allow update,delete: if request.auth.uid == resource.data.uid 
  }}
  /* for postingan */
	 match /post/{slug} {
   allow create : if request.auth.uid != null
    allow read : if resource.data.public == true || request.auth.uid in resource.data.writer
   	allow write, update, delete: if request.auth.uid == uid(resource.data.writer);
    match /love/{uid} {
   	allow create : if request.auth.uid != null;
    /* allow read :  */
   	allow write, update, delete: if request.auth.uid == resource.data.writer;
    }
  
    }
  /* for data public */
      match /public/{user} {
      allow read : if true
     	allow write, update, delete: if request.auth.uid == resource.data.uid;
        match /follow/{uid} {
        allow write, update, delete: if request.auth.uid == uid && user != request.auth.uid;
      }
      }
    /* for data username */
      match /username/{user} {
      allow read : if true
      allow create : if request.auth.uid != null && !exists(/databases/$(database)/documents/username/$(user)) && !exists(/databases/$(database)/documents/username/*).data.uid == request.auth.uid
     	allow write, update, delete: if request.auth.uid == resource.data.uid;
      }
      }
  
}
```
