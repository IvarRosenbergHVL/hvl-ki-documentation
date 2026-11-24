import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function Home() {
  return <Layout title="Prosjektopplæring" description="To læringsløp for HVLs KI-økosystem">
    <main className="course-home">
      <section className="course-hero">
        <div className="course-kicker">HVL / PROSJEKTOPPLÆRING</div>
        <h1>HVLs KI-økosystem</h1>
        <p>En felles plattform for KI-tjenester i utdanning, forskning og administrasjon.</p>
        <p className="course-note">Målarkitektur · faglig utkast</p>
      </section>
      <section className="course-choice" aria-label="Velg læringsløp">
        <h2>Velg ditt læringsløp</h2>
        <div className="course-grid">
          <Link className="course-tile" to="/docs/utviklere/intro">
            <span className="course-kicker">01 / TEKNISK</span>
            <h3>For utviklere</h3>
            <p>Forstå komponentene, ansvar, dataflyt, integrasjoner og sikkerhet. Med tekniske eksempler og kunnskapssjekker.</p>
            <span className="course-arrow">Start utviklerkurset →</span>
          </Link>
          <Link className="course-tile" to="/docs/interessenter/intro">
            <span className="course-kicker">02 / STRATEGISK</span>
            <h3>For interessenter</h3>
            <p>Forstå mulighetene, gevinstene, informasjonsforvaltningen og beslutningene som kreves.</p>
            <span className="course-arrow">Start interessentkurset →</span>
          </Link>
        </div>
        <p className="course-note">Begge kursene beskriver det planlagte målbildet, ikke bekreftet produksjonsstatus.</p>
      </section>
    </main>
  </Layout>;
}
