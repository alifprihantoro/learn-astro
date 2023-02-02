---
title: "Form nextjs"
slug: form-nextjs
date: 2022-07-26T05:56:38+07:00
lastmod: 2022-07-26T05:56:43+07:00
description: "form for nextjs/react"
---
- cek username
```typescriptreact
import { useState } from "react";
import getCollectionFireStore from "../../../service/firebase/crud/get/getCollectionFireStore";
import FormCekImportant from "../../../service/formCek/important";

export default function FormAuthImportant({ placeholder, state, type }: any) {
  const [cek, setCek] = useState("");
  const nama = placeholder.replace(/[\s]|[@]/gm, "");
  const cekUsername = async (value: string) => {
    try {
      const get_collection = (await getCollectionFireStore(
        `username/${value}`
      )) as string;
      let cek_username = get_collection === "no such document" ? "" : get_collection === "connection error" ? get_collection : "username sudah terpakai";
      setCek(cek_username);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          FormCekImportant(val, state, nama);
          nama === "username" && cekUsername(val);
        }}
        type={type}
      />
      <span>{state.err[nama]}</span>
    </>
  );
}
```
- important
```typescriptreact
import FormCekImportant from "../../../service/formCek/important";

export default function FormAuthImportant({ placeholder, state, type }: any) {
  const nama = placeholder.replace(/[\s]|[@]/gm, "");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          FormCekImportant(val, state, nama);
        }}
        type={type}
      />
      <span>{state.err[nama]}</span>
    </>
  );
}
```
- 
