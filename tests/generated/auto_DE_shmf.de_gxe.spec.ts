import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shmf.de_gxe', ['https://www.shmf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
