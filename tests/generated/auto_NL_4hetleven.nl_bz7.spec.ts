import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_4hetleven.nl_bz7', ['https://4hetleven.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
