import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medpets.nl_qgw', ['https://www.medpets.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
