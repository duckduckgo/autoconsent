import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_moesmeisje.nl_okx', ['https://moesmeisje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
