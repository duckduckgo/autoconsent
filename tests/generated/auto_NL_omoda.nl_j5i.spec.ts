import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omoda.nl_j5i', ['https://www.omoda.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
