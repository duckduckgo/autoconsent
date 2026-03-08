import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aandacht.net_fo6', ['https://aandacht.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
