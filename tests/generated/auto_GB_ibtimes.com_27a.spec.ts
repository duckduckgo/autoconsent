import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ibtimes.com_27a', ['https://www.ibtimes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
