import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_en-uk.ring.com_eib', ['https://en-uk.ring.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
