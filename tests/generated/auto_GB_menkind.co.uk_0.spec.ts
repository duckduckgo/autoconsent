import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_menkind.co.uk_0', ['https://www.menkind.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
