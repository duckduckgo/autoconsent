import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_psyned.nl_vvu', ['https://www.psyned.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
