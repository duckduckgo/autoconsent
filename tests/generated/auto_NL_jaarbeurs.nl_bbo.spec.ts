import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jaarbeurs.nl_bbo', ['https://www.jaarbeurs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
