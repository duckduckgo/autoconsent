import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_arriva.nl_e92', ['https://www.arriva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
