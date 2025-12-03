import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mega.nz_cqw', ['https://mega.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
