import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oaknorth.co.uk_0', ['https://oaknorth.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
