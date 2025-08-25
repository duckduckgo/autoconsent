import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tno.nl_m9r', ['https://www.tno.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
