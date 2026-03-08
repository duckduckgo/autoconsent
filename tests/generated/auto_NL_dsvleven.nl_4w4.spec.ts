import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dsvleven.nl_4w4', ['https://dsvleven.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
