import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_us.norton.com_eqo', ['https://us.norton.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
