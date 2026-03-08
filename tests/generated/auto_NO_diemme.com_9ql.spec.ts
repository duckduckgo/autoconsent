import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_diemme.com_9ql', ['https://diemme.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
