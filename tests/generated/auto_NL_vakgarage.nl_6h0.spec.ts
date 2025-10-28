import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vakgarage.nl_6h0', ['https://www.vakgarage.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
