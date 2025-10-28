import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wearewild.com_j39', ['https://wearewild.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
