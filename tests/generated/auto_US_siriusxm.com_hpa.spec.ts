import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_siriusxm.com_hpa', ['https://www.siriusxm.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
