import Image from "next/image";
import styles from "./page.module.css";
import { TicketButton } from "@/components/ticketButton/ticketButton";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.h1}>Amorphusion</h1>
        <h2>World Music that makes you dance</h2>
        <TicketButton />
      </main>
    </div>
  );
}
