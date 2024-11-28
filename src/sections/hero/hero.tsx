import Image from "next/image";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <div>
        <div className="hero-text">
          <div>
            <i>
              <h1 className="header">
                ARE YOU
                <br /> READY FOR
                <br /> THE PREMIER?
              </h1>
              <h3 className="subheading">
                LET&apos;S UPGRADE
                <br /> YOUR LIFESTYLE!
              </h3>
            </i>
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image
          alt="stock image of house"
          src="/heroImg.jpg"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
