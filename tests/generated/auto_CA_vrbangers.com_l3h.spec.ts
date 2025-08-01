import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_vrbangers.com_l3h', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
