import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_companyinfo.nl_g6p', ['https://companyinfo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
