import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tno.nl_kx0', ['https://www.tno.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
