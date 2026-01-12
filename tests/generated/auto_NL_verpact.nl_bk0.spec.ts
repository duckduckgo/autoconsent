import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verpact.nl_bk0', ['https://www.verpact.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
