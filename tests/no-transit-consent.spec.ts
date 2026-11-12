import generateCMPTests from '../playwright/runner';

generateCMPTests('no-transit-consent', ['https://reise.skyss.no/', 'https://nettbutikk.akt.no/', 'https://reise.ruter.no/']);
