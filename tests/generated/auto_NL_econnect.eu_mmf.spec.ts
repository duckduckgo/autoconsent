import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_econnect.eu_mmf', ['https://econnect.eu/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
