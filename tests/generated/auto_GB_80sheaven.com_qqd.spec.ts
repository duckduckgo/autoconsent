import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_80sheaven.com_qqd', ['https://80sheaven.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
