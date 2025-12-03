import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_europarcs.nl_i25', ['https://www.europarcs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
