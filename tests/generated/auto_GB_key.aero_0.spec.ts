import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_key.aero_0', ['https://www.key.aero/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
