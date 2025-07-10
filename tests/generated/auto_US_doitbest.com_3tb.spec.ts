import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_doitbest.com_3tb', ['https://www.doitbest.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
