import Image from "next/image";
import "./page.css";
import { TicketButton } from "@/components/ticketButton/ticketButton";
import { Carousel } from "@/components/carousel/carousel";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Amorphusion</h1>
        <h2>World Music that makes you dance</h2>
        <h3>LIVE AT </h3>
        <h3>
          Cafe la Ligne Verte, 2531 Rue Ontario East Montréal, Montreal, QC,
          Canada
        </h3>
        <h3>SATURDAY FEBRUARY 1ST | 8 PM</h3>
        <TicketButton />
        <Carousel>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </Carousel>
      </main>
    </div>
  );
}
