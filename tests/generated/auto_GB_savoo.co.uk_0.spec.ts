import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_savoo.co.uk_0', ['https://www.savoo.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
