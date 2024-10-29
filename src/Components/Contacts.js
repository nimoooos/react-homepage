import React, { useState } from "react";
import { Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import stylesheet from "../css/Contacts.css";

export default function Contacts() {
  const contacts = [
    {
      link: "mailto:d.song.149@gmail.com",
      display: "d.song.149@gmail.com",
      name: "Email",
    },
    {
      link: "https://www.linkedin.com/in/soomin-song-dev/",
      display: "https://www.linkedin.com/in/soomin-song-dev/",
      name: "Linkedin",
    },
    {
        link: "https://github.com/nimoooos/nimoooos/discussions",
        display: "https://github.com/nimoooos/nimoooos/discussions",
        name: "GitHub"
    },
    {
        link: "https://www.nimoooos.work",
        display: "https://www.nimoooos.work",
        name: "Website"
    }
  ];
  const [qrValue, setQrValue] = useState(contacts[0]);
  const [selectedIndex, setSelectedIndex] = useState(contacts[0].name);
  const [qrVisible, setQrVisible] = useState(true);

  return (
    <div style={stylesheet}>
      <h3>Contacts</h3>
      <ul>
        {contacts.map((x) => {
          return (
            <li
              className={x.name === selectedIndex ? "contacts selected" : "contacts"}
              onClick={() => {
                setQrValue(x.link);
                setSelectedIndex(x.name);
              }}
            >
              <Button
                variant={x.name === selectedIndex ? "primary" : "secondary"}
              >
                {x.name}
              </Button>
              <a className="link" href={x.link}>
                {x.display}
              </a>
            </li>
          );
        })}
      </ul>
      <hr />
      <div
        className="d-flex justify-content-center"
        onClick={() => setQrVisible(!qrVisible)}
      >
        {qrVisible ? (
          <div id="qrwrapper">
            <QRCode id="QR" size={384} value={qrValue} />
            <p>
              {
                contacts.find((x) => x.name === selectedIndex).display
              }
            </p>
            <h3>Soomin Song</h3>
          </div>
        ) : (
          <>
            <Button>Show QR Code</Button>
          </>
        )}
      </div>
    </div>
  );
}
