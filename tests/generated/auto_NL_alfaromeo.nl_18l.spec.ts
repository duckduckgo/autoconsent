import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alfaromeo.nl_18l', ['https://www.alfaromeo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
