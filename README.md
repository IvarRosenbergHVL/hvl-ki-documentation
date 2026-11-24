# HVLs KI-økosystem – dokumentasjon og opplæring

Offentlig tilgjengelig prosjektdokumentasjon og kursutkast. Innholdet beskriver målbildet, ikke verifisert produksjonsstatus.

## Lokal utvikling

Bruk Node.js 24 LTS og åpne repoet i VS Code. Kjør `npm install` og deretter `npm start` (eventuelt fra NPM Scripts i VS Code). Nettstedet åpnes på localhost:3000. `npm run build` bygger statiske filer i `build/`.

## Innhold

To læringsløp: utviklere og interessenter. Kursene ligger i `docs/` som Markdown/MDX. Diagrammer bruker Mermaid. Endringer gjennomgås i pull requests.

## Publisering

GitHub Pages er planlagt publiseringsmål: https://ivarrosenberghvl.github.io/hvl-ki-documentation/. Aktiver GitHub Actions som kilde under Settings → Pages. Publiseringsworkflowen bygger og publiserer fra main; den kan også startes manuelt fra Actions. Lokal utvikling bruker fortsatt rotstien `/`.

Repoet og Pages-nettstedet er offentlige. Ikke legg hemmeligheter, personopplysninger eller sensitiv systemdokumentasjon i repoet. De to inngangene er navigasjon, ikke tilgangskontroll.

## Status

Første versjon er et faglig utkast basert på prosjektets planlagte arkitektur. Teknisk implementeringsstatus og API-kontrakter skal verifiseres mot hovedrepoet. Designet er HVL-inspirert, ikke en godkjent profilimplementering.
