import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjellstrand.no_esg', ['https://fjellstrand.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
