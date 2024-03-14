"use client";

import { useState } from "react";
import styles from "./styles.module.sass";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/features/auth-slice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  async function LoginReq() {
    dispatch(login({ email, password }));
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
};
export default Login;
