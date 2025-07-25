import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_europarcs.nl_gq1', ['https://www.europarcs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
