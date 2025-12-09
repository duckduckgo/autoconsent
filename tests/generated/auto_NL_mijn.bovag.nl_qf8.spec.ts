import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijn.bovag.nl_qf8', ['https://mijn.bovag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
