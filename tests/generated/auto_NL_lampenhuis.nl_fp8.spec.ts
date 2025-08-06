import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lampenhuis.nl_fp8', ['https://lampenhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
