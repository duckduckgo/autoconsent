import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_simyo.nl_k6d', ['https://www.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
