import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reisgenie.nl_qre', ['https://reisgenie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
