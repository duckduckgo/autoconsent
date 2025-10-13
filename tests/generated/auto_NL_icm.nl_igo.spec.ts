import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_icm.nl_igo', ['https://www.icm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
