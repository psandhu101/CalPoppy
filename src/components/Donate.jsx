/** @jsxImportSource @emotion/react */
import "../style/donate.css";
import '../style/about.css';

import {Image, Button, Container, Row, Col} from 'react-bootstrap';
/** @jsxImportSource @emotion/react */

export default function Donate() {
  const titleText = "Help Poppy Grow!";
  const supportText = `You can support immediate future growth by donating to the Swanton Pacific Ranch Recovery Fund.`;
  const descriptionText = `Please note in the special requests text box that your donation is for Poppy and its student researchers.`;
  const description = descriptionText.split("\n").map((text, i) => (
    <p key={i} className="descriptionStyle">
      {text}
    </p>
      ));

  const support = supportText.split("\n").map((text, i) => (
    <p key={i} className="descriptionDonateStyle">
      {text}
    </p>
  ));
  return (
    <Container>
      <Row className="justify-content-center">
        <Col align="center">
          <div align="center" className="cardDonateStyles">
                <h2 className="titleDonateStyle">{titleText}</h2>
                {support}
                  <p align="center">
                  <Button variant='primary' size="lg" class='rounded-1 text-nowrap btnStyle' href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=401.644.&sort=1" target="_blank">SPR Ranch Recovery Fund</Button>
                  </p>
              {description}

          </div>
      </Col>
    </Row>
    </Container>
  );
}
