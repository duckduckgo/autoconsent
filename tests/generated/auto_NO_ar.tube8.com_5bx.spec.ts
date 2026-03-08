import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ar.tube8.com_5bx', ['https://ar.tube8.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
