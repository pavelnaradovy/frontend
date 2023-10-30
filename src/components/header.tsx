import Image from "next/image";
import logo from "../images/logo.png";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" />
    </div>
  );
}
