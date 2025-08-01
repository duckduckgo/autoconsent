import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shmf.de_w1y', ['https://www.shmf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
