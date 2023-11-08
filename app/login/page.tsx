"use client";

import { useState } from "react";
import styles from "./styles.module.sass";
import Link from "next/link";
import axios from "axios";

export default async function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoginReq() {
    const res = await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        email: "qwerty@qwerty.com",
        password: "Google123@",
      })
      .then(({ data: { token } }) => {
        if (token) {
          localStorage.setItem("token", token);
        }
      });
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span>Login</span>
          <div className={styles.content__inputs}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button onClick={() => LoginReq()}>Log in</button>

          <div className={styles.content__links}>
            <Link href="/register">Sign up</Link>
            <Link href="/restore-password">Forgot a password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
