import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_heinnie.com_0', ['https://heinnie.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
