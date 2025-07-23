import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zacks.com_ec1', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
