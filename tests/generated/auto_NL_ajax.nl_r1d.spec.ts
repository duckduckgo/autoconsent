import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ajax.nl_r1d', ['https://www.ajax.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
