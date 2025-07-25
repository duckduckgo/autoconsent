import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tefal.nl_4cp', ['https://www.tefal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
