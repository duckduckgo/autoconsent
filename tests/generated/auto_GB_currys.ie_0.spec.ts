import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_currys.ie_0', ['https://www.currys.ie/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
