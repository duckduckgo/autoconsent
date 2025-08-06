import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cibdol.nl_att', ['https://www.cibdol.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
