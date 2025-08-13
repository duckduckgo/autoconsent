import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zopa.com_0', ['https://www.zopa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
