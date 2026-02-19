import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_monkeytype.com_q7j', ['https://monkeytype.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
