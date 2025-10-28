import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mnt.fr_4h7', ['https://www.mnt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
