import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cwz.nl_sy0', ['https://www.cwz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
