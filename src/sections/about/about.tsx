import Line from "@/components/line/line";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <Line />
      <div className="text-container">
        <h1>
          What
          <br /> We&apos;re
          <br /> About
        </h1>
        <p>
          <i>
            Dedicated to providing our clients with the highest level of
            customized investment/financial advice. Our company is 100%
            employee-owned and isn&apos;t affiliated with any outside interest.
            This allows our investment team to deliver truly unbiased and
            independent investment advice. We deliver timely performance
            reporting and analysis to give our clients a comprehensive view of
            their plans and facilitate informed decision-making. If you ever
            need to discuss, our knowledgeable team will always be accessible.
          </i>
        </p>
      </div>
      <div className="img-container">
        <img alt="Team meeting image" src="team1.jpg" />
        <img alt="Team meeting image" src="team2.jpg" />
      </div>
    </div>
  );
}
