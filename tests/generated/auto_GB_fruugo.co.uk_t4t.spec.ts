import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fruugo.co.uk_t4t', ['https://www.fruugo.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
