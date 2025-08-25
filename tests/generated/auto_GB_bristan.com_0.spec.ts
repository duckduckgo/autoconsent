import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bristan.com_0', ['https://www.bristan.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
