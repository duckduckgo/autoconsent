import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medpets.nl_kr9', ['https://www.medpets.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
