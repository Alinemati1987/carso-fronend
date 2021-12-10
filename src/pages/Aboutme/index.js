import React, { useState } from "react";
import "./aboutme.css";

export default function Aboutme() {
  const ImgUrl =
    "https://res.cloudinary.com/dkdzt4lca/image/upload/v1639100391/Carso/ali_ck05tq.png";

  const [iam, setIam] = useState(false);
  const [idid, setIdid] = useState(false);
  const [contact, setContact] = useState(false);

  const iamfunction = () => {
    setIam(!iam);
    setIdid(false);
    setContact(false);
  };

  const ididfunction = () => {
    setIam(false);
    setIdid(!idid);
    setContact(false);
  };

  const contactfunction = () => {
    setIam(false);
    setIdid(false);
    setContact(!contact);
  };

  return (
    <div id="whole">
      <div>
        <ul className="aboutmeul">
          <li className="secondAnimation" onClick={iamfunction}>
            Who I am
          </li>
          <li className="secondAnimation" onClick={ididfunction}>
            What I did
          </li>
          <li className="secondAnimation" onClick={contactfunction}>
            How Contact Me
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h1 id="aboutmeh1" className="firstAnimation">
            HELLO
            <br />
            Welcome To My Web-app
          </h1>
          <h2 id="aboutmeh2" className="firstAnimation">
            I am Ali Nemati
          </h2>
        </div>
        <div>
          {iam ? (
            <p id="popupText">
              My friends know me as someone who can not do a job in the same way
              for two times, It means I love to experience different ways and
              different jobs.
              <br />I love nothing more than walking in the nature and
              photography.
              <br />
              My favorite sport is Pingpong
            </p>
          ) : null}
        </div>
        <div>
          {idid ? (
            <tbody id="education">
              <tr>
                <td style={{ paddingRight: "20px" }}>
                  <b>2007-2011 : </b>
                </td>

                <td>BSc. Mechanical Eng.</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "10px" }}>
                  <b>2011-2012 : </b>
                </td>

                <td>MSc. Renewable Energy Eng.</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "10px" }}>
                  <b>2019-Now : </b>
                </td>

                <td>Leadership Coaching</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "10px" }}>
                  <b>2021 </b>
                </td>

                <td>Full-stack developer</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "10px" }}>
                  <b>Now-Future : </b>
                </td>

                <td>Who knows!</td>
              </tr>
            </tbody>
          ) : null}
        </div>
        <div className="circle-container-me">
          {contact ? (
            <div id="contact">
              <tbody style={{ display: "flex" }}>
                <tr>
                  <a
                    target="_blank"
                    className="aboutmea"
                    href="https://github.com/Alinemati1987"
                  >
                    <img
                      className="aboutmeimg"
                      src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1639103833/Carso/5847f98fcef1014c0b5e48c0_ukch44.png"
                      alt="Github of Ali Nemati"
                    />
                    Github
                  </a>
                </tr>
                <tr>
                  <td>
                    <a
                      className="aboutmea"
                      href="https://www.linkedin.com/in/alinemati1987/"
                      target="_blank"
                    >
                      <img
                        className="aboutmeimg"
                        src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1639100390/Carso/linkedin_2_bw9cdo.png"
                        alt="linkedin of Ali Nemati"
                      />
                      LinkedIn
                    </a>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      className="aboutmea"
                      href="https://wa.me/+31626648797"
                    >
                      <img
                        className="aboutmeimg"
                        src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1639100391/Carso/whatsapp_pr3xqt.png"
                        alt="Whatsapp of Ali Nemati"
                      />
                      Whatsapp
                    </a>
                  </td>
                </tr>
                <tr>
                  <a
                    target="_blank"
                    className="aboutmea"
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
                  >
                    <img
                      className="aboutmeimg"
                      src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1639100390/Carso/gmail_addyif.png"
                      alt="Gmail of Ali Nemati"
                    />
                    Gmail
                  </a>
                </tr>
              </tbody>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
