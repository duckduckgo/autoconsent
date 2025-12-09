import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_movir.nl_ux8', ['https://www.movir.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
