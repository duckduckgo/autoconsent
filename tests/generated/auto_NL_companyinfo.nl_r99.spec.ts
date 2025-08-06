import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_companyinfo.nl_r99', ['https://companyinfo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
