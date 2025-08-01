import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_newpharma.fr_0x8', ['https://www.newpharma.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
