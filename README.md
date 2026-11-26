# HVLs KI-økosystem – dokumentasjon og prosjektinnføring

Offentlig tilgjengelig arkitektur- og funksjonalitetsbeskrivelse for planlagt utvikling av HVLs KI-økosystem.

## Lokal utvikling

Bruk Node.js 24 LTS og åpne repoet i VS Code. Kjør `npm install` og deretter `npm start` (eventuelt fra NPM Scripts i VS Code). Nettstedet åpnes på localhost:3000. `npm run build` bygger statiske filer i `build/`.

## Innhold

Tre innganger til prosjektinnføringen: prodekanforum, interessenter og utviklere. Dokumentasjonen ligger i `docs/` som Markdown/MDX. Diagrammer bruker Mermaid. Endringer gjennomgås i pull requests.

## Publisering

GitHub Pages er planlagt publiseringsmål: https://ivarrosenberghvl.github.io/hvl-ki-documentation/. Aktiver GitHub Actions som kilde under Settings → Pages. Publiseringsworkflowen bygger og publiserer fra main; den kan også startes manuelt fra Actions. Lokal utvikling bruker fortsatt rotstien `/`.

Repoet og Pages-nettstedet er offentlige. Ikke legg hemmeligheter, personopplysninger eller sensitiv systemdokumentasjon i repoet. De to inngangene er navigasjon, ikke tilgangskontroll.

