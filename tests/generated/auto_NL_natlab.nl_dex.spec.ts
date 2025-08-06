import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_natlab.nl_dex', ['https://www.natlab.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
