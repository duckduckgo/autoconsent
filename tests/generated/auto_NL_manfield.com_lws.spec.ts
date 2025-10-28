import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_manfield.com_lws', ['https://www.manfield.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
