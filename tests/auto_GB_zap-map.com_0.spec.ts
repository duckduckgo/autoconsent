import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_zap-map.com_0', ['https://www.zap-map.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
