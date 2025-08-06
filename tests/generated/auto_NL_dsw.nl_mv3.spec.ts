import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dsw.nl_mv3', ['https://www.dsw.nl/Consumenten'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
