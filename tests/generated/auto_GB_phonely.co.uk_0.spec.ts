import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_phonely.co.uk_0', ['https://www.phonely.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
