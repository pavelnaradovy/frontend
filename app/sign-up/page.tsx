"use client";
// import Image from "next/image";
import styles from "./sign-in.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { login } from "@/redux/features/auth-slice";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const loginFunc = (e: any) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const username = useAppSelector((state) => state.auth.value.username);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Sign in</span>
      <form onSubmit={loginFunc}>
        <span className={styles.subTitle}>Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <span className={styles.subTitle}>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign-in</button>
      </form>
    </div>
  );
}
