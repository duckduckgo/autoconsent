import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_afarley.co.uk_lxk', ['https://afarley.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
