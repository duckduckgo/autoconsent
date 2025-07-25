import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_companyinfo.nl_vbd', ['https://companyinfo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
