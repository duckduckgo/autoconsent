import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opel.nl_p1z', ['https://www.opel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
