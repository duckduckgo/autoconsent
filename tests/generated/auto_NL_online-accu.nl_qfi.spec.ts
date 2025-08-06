import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_online-accu.nl_qfi', ['https://online-accu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
