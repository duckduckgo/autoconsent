import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hwdsb.on.ca_0f2', ['https://www.hwdsb.on.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
