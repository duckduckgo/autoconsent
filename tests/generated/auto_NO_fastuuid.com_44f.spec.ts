import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fastuuid.com_44f', ['https://fastuuid.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
