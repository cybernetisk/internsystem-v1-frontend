# CYBs internsystem (frontend)

## Archived

As of August 2024, this repository has been replaced by a new implementation of cyb.no.


| Master | Test |
| --- | --- |
| [![Build Status](https://travis-ci.org/cybernetisk/internsystem-frontend.svg?branch=master)](https://travis-ci.org/cybernetisk/internsystem-frontend) | [![Build Status](https://travis-ci.org/cybernetisk/internsystem-frontend.svg?branch=test)](https://travis-ci.org/cybernetisk/internsystem-frontend) |

Dette prosjektet er frontend-delen av
https://github.com/cybernetisk/internsystem. Utvidet informasjon er
tilgjengelig i det prosjektet.

## Teknisk oversikt for frontend

* [ReactJS](http://facebook.github.io/react/) i kombinasjon med [react-router](
  https://github.com/ReactTraining/react-router)
* [NuclearJS](https://optimizely.github.io/nuclear-js/) benyttes som [Flux](
  https://facebook.github.io/flux/)-arkitektur/rammeverk
* Kommunikasjon mellom backend og frontend er REST-basert
* Frontend bygges med Webpack

## Sette opp utviklingsversjon

```bash
npm install
npm run dev
```

http://localhost:3000/

API-adressen til backend kan overstyres ved å kopiere `env.template.js` til
`env.override.js` og redigere innholdet.

### Kobling mot backend

Som standard vil den bruke backend på samme hostname som devserveren
men på port 8000. Når man lager produksjonsversjon brukes imidlertid
samme hostname og port. Dette kan evt. endres i `webpack.config.js`.

Når man tester denne frontend-delen må man husk å ha en fungere
backend som tilbyr data. Ved å følge README i backend oppnår man det.

## Frontend i produksjon

Frontend er bare statiske filer. Se `.travis.yml` og `scripts/deploy.sh`
for hvordan dette blir satt i produksjon. Frontend settes i produksjon
automatisk ved push til master.

Se flere detaljer om produksjonsmiljøet i
http://github.com/cybernetisk/internsystem
