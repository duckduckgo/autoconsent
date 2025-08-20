import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fruugo.co.uk_686', ['https://www.fruugo.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
