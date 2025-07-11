import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_veals.co.uk_a5b', ['https://www.veals.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
