import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_etna.nl_xf2', ['https://etna.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
