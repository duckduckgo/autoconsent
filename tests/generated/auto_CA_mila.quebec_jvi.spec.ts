import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mila.quebec_jvi', ['https://mila.quebec/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
