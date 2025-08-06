import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_utwente.nl_bke', ['https://www.utwente.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
