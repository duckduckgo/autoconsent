import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bumble.com_acm', ['https://bumble.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
