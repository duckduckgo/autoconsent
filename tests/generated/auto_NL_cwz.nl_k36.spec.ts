import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cwz.nl_k36', ['https://www.cwz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
