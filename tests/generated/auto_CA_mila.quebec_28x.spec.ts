import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mila.quebec_28x', ['https://mila.quebec/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
