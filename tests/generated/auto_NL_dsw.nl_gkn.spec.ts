import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dsw.nl_gkn', ['https://www.dsw.nl/Consumenten'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
