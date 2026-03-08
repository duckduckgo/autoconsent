import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blocout.com_lyw', ['https://blocout.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
