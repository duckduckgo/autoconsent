import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_grattan.co.uk_0', ['https://www.grattan.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
