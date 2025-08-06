import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_otrium.nl_84v', ['https://www.otrium.nl/dames'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
