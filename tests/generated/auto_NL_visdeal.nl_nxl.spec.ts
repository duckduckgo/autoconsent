import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visdeal.nl_nxl', ['https://visdeal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
