import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_us.norton.com_t07', ['https://us.norton.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
