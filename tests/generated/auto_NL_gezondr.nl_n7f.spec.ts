import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondr.nl_n7f', ['https://gezondr.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
