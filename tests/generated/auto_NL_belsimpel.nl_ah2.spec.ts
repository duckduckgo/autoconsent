import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_belsimpel.nl_ah2', ['https://www.belsimpel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
