import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_foundryvtt.com_0', ['https://foundryvtt.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
