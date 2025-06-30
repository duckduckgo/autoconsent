import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_scu.mb.ca_x71', ['https://scu.mb.ca/personal'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
