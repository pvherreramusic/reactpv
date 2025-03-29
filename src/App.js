// App.js
import React from "react";
import "./App.css";
import xanxacover from "./images/cover2.jpg";
import { DownloadLink } from "./DownloadLink";
import cigarettescover from "./images/cover.jpg"
function App() {
  const XanaxandMercydownload =
    "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/Xanax+and+Mercy+MP3.zip";
     const CigarettesandWeddingsdownload = "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/Cigarettes+and+Weddings.zip"
  return (
    <div className="App">
      <header className="app-header">
        <h1>Welcome to PV HERRERA MUSIC</h1>
        <p>Listen to more music by PV!</p>
      </header>
      <main className="app-main">
        <section className="features-section">
          <h2>Complete Discography</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Xanax and Mercy LP 2 Instruemental Rock</h3>
              <img src={xanxacover} alt="BigCo Inc. logo" />
              <DownloadLink
                url={XanaxandMercydownload}
                fileName="/Xanax+and+Mercy.zip"
              />
            </div>
            <div className="features-grid">
            <div className="feature">
              <h3>Cigarettes and Weddings LP 1 Ambient Post-Rock</h3>
              <img src={cigarettescover} alt="BigCo Inc. logo" />
              <DownloadLink
                url={CigarettesandWeddingsdownload}
                fileName="/Cigarettes+and+Weddings.zip"
              />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <h2>About PV HERRERA</h2>
          <p>
            PV Herrera has been active in the music scene of the Central Coast, CA
            from 2008 to Present. Originally from Los Gatos, he moved to the
            central coast for better health due to his restricted air way. He
            was given guitar lessons at the age of 13 at a small music lesson
            school. His first project was called The Danger Girl Starship where
            he wrote the majority of his work, starting in 2008. Under his
            personal stage name, he has released two albums. Those albums are:
            "Cigarettes and Weddings" and "Xanax and Mercy". Download those works for free on this site.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            Reach out to us for any inquiries or show offers at
            pvherrerabooking@gmail.com.
          </p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 PV HERRERA MUSIC All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
