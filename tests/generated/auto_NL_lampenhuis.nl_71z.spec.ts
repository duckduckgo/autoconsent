import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lampenhuis.nl_71z', ['https://lampenhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
