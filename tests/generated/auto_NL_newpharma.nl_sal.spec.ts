import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newpharma.nl_sal', ['https://www.newpharma.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
