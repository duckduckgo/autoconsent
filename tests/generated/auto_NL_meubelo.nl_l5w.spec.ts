import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meubelo.nl_l5w', ['https://www.meubelo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
