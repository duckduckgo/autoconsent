import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NO_cercadorbiblioteques.cultura.gencat.cat_nmt',
    ['https://cercadorbiblioteques.cultura.gencat.cat/start.do?set-locale=ca_ES'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] },
);
