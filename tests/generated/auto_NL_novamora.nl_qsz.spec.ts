import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_novamora.nl_qsz', ['https://www.novamora.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
