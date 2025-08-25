import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_belsimpel.nl_2mo', ['https://www.belsimpel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
