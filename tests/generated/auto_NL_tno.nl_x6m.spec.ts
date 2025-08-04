import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tno.nl_x6m', ['https://www.tno.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
