import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function Home() {
  return <Layout title="Prosjektopplæring" description="Tre innganger til HVLs KI-økosystem">
    <main className="course-home">
      <section className="course-hero">
        <div className="course-kicker">HVL / PROSJEKTOPPLÆRING</div>
        <h1>HVLs KI-økosystem</h1>
        <p>En felles plattform for KI-tjenester i utdanning, forskning og administrasjon, med innebygd personvern.</p>
        <p className="course-note">Arkitektur- og funksjonalitetsbeskrivelse · planlagt utvikling</p>
      </section>
      <section className="course-choice" aria-label="Velg læringsløp">
        <h2>Velg ditt læringsløp</h2>
        <div className="course-grid">
          <Link className="course-tile" to="/docs/utviklere/intro">
            <span className="course-kicker">01 / TEKNISK</span>
            <h3>For utviklere</h3>
            <p>Forstå komponentene, ansvar, dataflyt, integrasjoner og sikkerhet. Med tekniske eksempler og arkitekturdiagrammer.</p>
            <span className="course-arrow">Start utviklerkurset →</span>
          </Link>
          <Link className="course-tile" to="/docs/interessenter/intro">
            <span className="course-kicker">02 / STRATEGISK</span>
            <h3>For interessenter</h3>
            <p>Forstå mulighetene, gevinstene, informasjonsforvaltningen, personvernet og beslutningene som kreves.</p>
            <span className="course-arrow">Start interessentkurset →</span>
          </Link>
          <Link className="course-tile" to="/docs/prodekanforum/intro">
            <span className="course-kicker">03 / BESLUTNINGSGRUNNLAG</span>
            <h3>For prodekanforum</h3>
            <p>Fra enkel KI-chat til en moderne, HVL-styrt KI-tjeneste med interne integrasjoner, agenter og en felles grunnmur. Kort beslutningsgrunnlag.</p>
            <span className="course-arrow">Les beslutningsgrunnlaget →</span>
          </Link>
        </div>
      </section>
    </main>
  </Layout>;
}
