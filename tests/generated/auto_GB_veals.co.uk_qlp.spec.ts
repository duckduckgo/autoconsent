import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_veals.co.uk_qlp', ['https://www.veals.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
