import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chrislynam.net_9k9', ['https://chrislynam.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
