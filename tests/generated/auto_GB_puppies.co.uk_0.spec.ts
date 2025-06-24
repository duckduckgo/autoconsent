import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_puppies.co.uk_0', ['https://www.puppies.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
