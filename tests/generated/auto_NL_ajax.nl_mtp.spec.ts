import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ajax.nl_mtp', ['https://www.ajax.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
