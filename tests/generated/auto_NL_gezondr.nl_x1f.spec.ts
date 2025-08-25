import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondr.nl_x1f', ['https://gezondr.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
