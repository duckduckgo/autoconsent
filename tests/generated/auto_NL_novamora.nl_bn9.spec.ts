import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_novamora.nl_bn9', ['https://www.novamora.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
