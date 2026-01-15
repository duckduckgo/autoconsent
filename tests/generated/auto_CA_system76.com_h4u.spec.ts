import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_system76.com_h4u', ['https://system76.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
