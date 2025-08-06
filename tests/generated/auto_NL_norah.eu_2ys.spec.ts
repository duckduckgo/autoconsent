import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_norah.eu_2ys', ['https://www.norah.eu/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
