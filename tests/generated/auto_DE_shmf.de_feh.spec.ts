import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shmf.de_feh', ['https://www.shmf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
