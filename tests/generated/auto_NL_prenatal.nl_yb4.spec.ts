import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_prenatal.nl_yb4', ['https://www.prenatal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
