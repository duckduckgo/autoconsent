import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_psyned.nl_h34', ['https://www.psyned.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
