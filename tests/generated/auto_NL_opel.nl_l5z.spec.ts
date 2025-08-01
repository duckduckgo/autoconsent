import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opel.nl_l5z', ['https://www.opel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
