import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lampenhuis.nl_u4o', ['https://lampenhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
