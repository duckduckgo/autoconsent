import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ford.co.uk_0', ['https://www.ford.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
