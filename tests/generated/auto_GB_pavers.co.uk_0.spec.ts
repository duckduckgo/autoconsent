import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pavers.co.uk_0', ['https://www.pavers.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
