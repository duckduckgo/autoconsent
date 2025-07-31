import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_veals.co.uk_k2p', ['https://www.veals.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
