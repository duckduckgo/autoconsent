import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zacks.com_24z', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
