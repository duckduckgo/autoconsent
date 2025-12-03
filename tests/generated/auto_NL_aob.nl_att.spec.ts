import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aob.nl_att', ['https://www.aob.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
