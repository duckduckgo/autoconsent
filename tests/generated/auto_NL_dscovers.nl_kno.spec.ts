import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dscovers.nl_kno', ['https://dscovers.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
