import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rumble.com_0', ['https://rumble.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
