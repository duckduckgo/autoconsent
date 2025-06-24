import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kayak.co.uk_0', ['https://www.kayak.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
