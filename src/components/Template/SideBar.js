import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Frankie&apos;Pang</h2>
        <p><a href="mailto:frankiepang18@gmail.com">frankiepang18@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Frankie. I like building things.
        I am a <a href="https://icme.stanford.edu/">designer</a> , BA Alumni, and
        the co-founder and owner of <a href="https://linktr.ee/shepang">Shepang</a>. I am
        at <a href="https://mcparks.us">MCParks</a>
        , and <a href="https://linktr.ee/shepang">Shepang</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Frankie&apos;Pang <Link to="/">mrfrank.art</Link>.</p>
    </section>
  </section>
);

export default SideBar;
