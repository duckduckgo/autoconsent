import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schulinck.nl_nny', ['https://www.schulinck.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
