import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cwz.nl_jsw', ['https://www.cwz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
