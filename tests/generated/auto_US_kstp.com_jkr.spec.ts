import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kstp.com_jkr', ['https://kstp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
