import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ah.nl_yq0', ['https://www.ah.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
