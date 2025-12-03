import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vve.nl_rmi', ['https://www.vve.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
