import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_scu.mb.ca_mqv', ['https://scu.mb.ca/personal'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
