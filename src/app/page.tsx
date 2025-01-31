import Image from "next/image";
import "./page.css";
import { Button } from "@/components/button/button";
import { Carousel } from "@/components/carousel/carousel";
import { TwitchStream } from "@/components/twitchStream/twitchStream";

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
          <Button
            text="Book Now"
            url="https://thepointofsale.com/tickets/amorphusionwonderland"
          />
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
        <div className="content gallery-content">
          <h2>Moments</h2>
          <Carousel>
            <Image
              src="/photos/groupPhoto.png"
              alt={"picture of Amorphusion band"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/groupPerformance2.png"
              alt={"picture of Amorphusion band"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/drummers.png"
              alt={"picture of Amorphusion drummers"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/pianist.png"
              alt={"picture of Amorphusion pianist"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/bigViolin.png"
              alt={"picture of Amorphusion muscician"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/groupPerformance.png"
              alt={"picture of Amorphusion singers"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/flute.png"
              alt={"picture of Amorphusion flutist"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
            <Image
              src="/photos/tibetDrum.png"
              alt={"picture of Amorphusion drummer"}
              width={1200}
              height={675}
              layout="responsive"
            ></Image>
          </Carousel>
        </div>
      </section>
      <section className="about-us-section">
        <div className="content about-us-content">
          <Image
            src="/musicNoteOrange.png"
            alt={"picture of musical note"}
            width={45}
            height={63}
            className="big-note"
          ></Image>
          <Image
            src="/musicNoteSmallOrange.png"
            alt={"picture of musical note"}
            width={37}
            height={34}
            className="small-note"
          ></Image>
          <h2>About us</h2>
          <p>
            Amor? Fusion? Contrary to popular belief, Amorphusion was not born
            by merging "Amor" and "Fusion" into one word. Rather, it originally
            stems from Amorphous, as we like to view art as a medium without a
            particular shape or form. It is a feeling, it is an expression, and
            most importantly it epitomizes the human experience all across the
            globe. It is this purpose that inspired us to create a fusion and
            love just appeared out of nowhere in the process - as is often the
            case with amor. We are delighted to embark on this journey of
            discovery with you as we morph seemingly-distant voices of the world
            not only into one sound, but also a united community.
          </p>
        </div>
      </section>
      <section className="twitch-section">
        <div className="content twitch-content">
          <h2>Watch us Live</h2>
          <TwitchStream />
        </div>
      </section>
      <section className="donation-section">
        <div className="content donation-content">
          <h3>Support us for more future events</h3>
          <Button
            text="Donate"
            url="https://donate.stripe.com/5kAdSR3fu5Kw88g5kk"
          />
        </div>
      </section>
    </div>
  );
}
