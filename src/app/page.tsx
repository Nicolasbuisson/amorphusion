import Image from "next/image";
import "./page.css";
import { TicketButton } from "@/components/ticketButton/ticketButton";
import { Carousel } from "@/components/carousel/carousel";

export default function Home() {
  return (
    <div>
      <main>
        <div className="image-container">
          <Image
            src="/flowersOrange.png"
            alt={"picture of flowers"}
            width={265}
            height={162}
            className="hero-image rotated"
            layout="responsive"
          ></Image>
          <Image
            src="/flowerOrange.png"
            alt={"picture of flower"}
            width={200}
            height={200}
            className="hero-image"
            layout="responsive"
          ></Image>
        </div>
        <div className="hero-text">
          <h1>Amorphusion</h1>
          <h2>World Music that makes you dance</h2>
          <h3>LIVE AT </h3>
          <h3>
            Cafe la Ligne Verte, 2531 Rue Ontario East Montréal, Montreal, QC,
            Canada
          </h3>
          <h3 className="purple">SATURDAY FEBRUARY 1ST | 8 PM</h3>
          <TicketButton />
        </div>
        <div className="image-container space-evenly">
          <Image
            src="/yellowFlowersOrange.png"
            alt={"picture of yellow flowers"}
            width={140}
            height={140}
            className="hero-image display-none-520"
          ></Image>
          <Image
            src="/coupleDancingOrange.png"
            alt={"picture of couple dancing"}
            width={200}
            height={200}
            className="hero-image"
          ></Image>
          <Image
            src="/maracasOrange.png"
            alt={"picture of maracas"}
            width={140}
            height={140}
            className="hero-image display-none-520"
          ></Image>
        </div>
      </main>
      <section className="gallery-section">
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
      </section>
    </div>
  );
}
