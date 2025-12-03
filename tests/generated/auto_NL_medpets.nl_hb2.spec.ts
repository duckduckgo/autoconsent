import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medpets.nl_hb2', ['https://www.medpets.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
