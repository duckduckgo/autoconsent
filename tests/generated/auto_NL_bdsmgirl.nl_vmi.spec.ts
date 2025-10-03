import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bdsmgirl.nl_vmi', ['https://www.bdsmgirl.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
