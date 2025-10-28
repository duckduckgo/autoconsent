import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_teradek.com_dvs', ['https://teradek.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
