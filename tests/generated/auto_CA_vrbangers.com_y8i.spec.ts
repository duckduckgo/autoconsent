import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_vrbangers.com_y8i', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
