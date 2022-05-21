/** @jsxImportSource @emotion/react */
import '../style/greetingCard.css';
import logoSrc from "../images/spr_logo.png"

export default function GreetingCard() {
  const titleText = "Welcome to Swanton Poppy Chat!";
  const descriptionText = `Ask anything you want to know about the ranch!
  Check out how to use Poppy by clicking the question mark above. 
  Please note Poppy is a work in progress and your questions help poppy grow! `;
  const logoAltText = `Swanton Poppy Logo`;

  const description = descriptionText.split("\n").map((text, i) => (
    <p key={i} className="descriptionStyle">
      {text}
    </p>
  ));

  return (
    <div className="cardStyles">
      <img className="logoStyle" src={logoSrc} alt={logoAltText} />
      <h2 className="titleStyle">{titleText}</h2>
      {description}
    </div>
  );
}
