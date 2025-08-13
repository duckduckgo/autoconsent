import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mawaqit.net_0cw', ['https://mawaqit.net/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
