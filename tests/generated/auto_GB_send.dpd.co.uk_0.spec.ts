import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_send.dpd.co.uk_0', ['https://send.dpd.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
