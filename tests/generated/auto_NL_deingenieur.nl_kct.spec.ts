import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deingenieur.nl_kct', ['https://deingenieur.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
