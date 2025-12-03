import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sro.nl_7ia', ['https://sro.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
