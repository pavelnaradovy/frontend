"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { login } from "@/redux/features/auth-slice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const loginFunc = () => {
    dispatch(login("lolka"));
  };
  const username = useAppSelector((state) => state.authReducer.value.username);
  return (
    <div>
      <button onClick={loginFunc}>Lolka polka</button>
      <span>1231232{username}</span>
    </div>
  );
}
