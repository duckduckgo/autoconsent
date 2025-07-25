import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newpharma.nl_fz3', ['https://www.newpharma.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
