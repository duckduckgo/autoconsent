import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dmgdeurne.nl_x6m', ['https://dmgdeurne.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
