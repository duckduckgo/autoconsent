import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_arriva.nl_8s7', ['https://www.arriva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
