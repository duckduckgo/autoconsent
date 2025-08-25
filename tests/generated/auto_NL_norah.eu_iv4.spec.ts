import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_norah.eu_iv4', ['https://www.norah.eu/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
