import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnstate.nl_juh', ['https://www.rijnstate.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
