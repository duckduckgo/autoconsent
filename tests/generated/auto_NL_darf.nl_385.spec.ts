import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_darf.nl_385', ['https://darf.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
