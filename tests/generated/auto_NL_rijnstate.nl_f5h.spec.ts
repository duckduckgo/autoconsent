import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnstate.nl_f5h', ['https://www.rijnstate.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
