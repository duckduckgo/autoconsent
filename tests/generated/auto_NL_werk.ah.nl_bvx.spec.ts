import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werk.ah.nl_bvx', ['https://werk.ah.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
