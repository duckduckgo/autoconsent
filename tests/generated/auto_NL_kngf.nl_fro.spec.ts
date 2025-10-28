import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kngf.nl_fro', ['https://www.kngf.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
