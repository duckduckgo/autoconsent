import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hyperdrug.co.uk_0', ['https://hyperdrug.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
