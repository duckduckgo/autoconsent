import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eunetworks.com_q7f', ['https://eunetworks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
