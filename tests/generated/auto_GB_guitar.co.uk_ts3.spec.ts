import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_guitar.co.uk_ts3', ['https://www.guitar.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
