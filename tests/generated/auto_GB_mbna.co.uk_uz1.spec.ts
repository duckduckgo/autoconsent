import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mbna.co.uk_uz1', ['https://www.mbna.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
