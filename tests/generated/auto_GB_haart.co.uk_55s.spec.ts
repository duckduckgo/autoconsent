import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_haart.co.uk_55s', ['https://www.haart.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
