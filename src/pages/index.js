import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function Home() {
  return <Layout title="Prosjektinnføring" description="Tre innganger til HVLs KI-økosystem">
    <main className="course-home">
      <section className="course-hero">
        <div className="course-kicker">HVL / PROSJEKTINNFØRING</div>
        <h1>HVLs KI-økosystem</h1>
        <p>En felles plattform for KI-tjenester i utdanning, forskning og administrasjon, med innebygd personvern.</p>
        <p className="course-note">Arkitektur- og funksjonalitetsbeskrivelse · planlagt utvikling</p>
      </section>
      <section className="course-choice" aria-label="Velg prosjektinnføring">
        <h2>Velg målgruppe</h2>
        <div className="course-grid">
          <Link className="course-tile" to="/docs/prodekanforum/intro">
            <span className="course-kicker">01 / BESLUTNINGSGRUNNLAG</span>
            <h3>For prodekanforum</h3>
            <p>Fra enkel KI-chat til en moderne, HVL-styrt KI-tjeneste med interne integrasjoner, agenter og en felles grunnmur. Kort beslutningsgrunnlag med valgfri fordypning.</p>
            <span className="course-arrow">Les beslutningsgrunnlaget →</span>
          </Link>
          <Link className="course-tile" to="/docs/interessenter/intro">
            <span className="course-kicker">02 / STRATEGISK</span>
            <h3>For interessenter</h3>
            <p>Forstå mulighetene, gevinstene, informasjonsforvaltningen, personvernet og beslutningene som kreves.</p>
            <span className="course-arrow">Les interessentinnføringen →</span>
          </Link>
          <Link className="course-tile" to="/docs/utviklere/intro">
            <span className="course-kicker">03 / TEKNISK</span>
            <h3>For utviklere</h3>
            <p>Forstå komponentene, ansvar, dataflyt, integrasjoner og sikkerhet. Med tekniske eksempler og arkitekturdiagrammer.</p>
            <span className="course-arrow">Les utviklerinnføringen →</span>
          </Link>
        </div>
      </section>
    </main>
  </Layout>;
}
