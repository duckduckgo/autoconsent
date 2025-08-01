import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_restless.co.uk_0', ['https://restless.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
