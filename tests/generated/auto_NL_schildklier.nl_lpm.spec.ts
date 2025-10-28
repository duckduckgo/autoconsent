import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schildklier.nl_lpm', ['https://schildklier.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
