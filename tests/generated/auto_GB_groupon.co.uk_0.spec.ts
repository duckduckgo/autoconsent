import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_groupon.co.uk_0', ['https://www.groupon.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
