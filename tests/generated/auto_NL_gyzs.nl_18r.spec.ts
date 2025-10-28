import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gyzs.nl_18r', ['https://www.gyzs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
