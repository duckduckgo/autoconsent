import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_auteursbond.nl_xf8', ['https://auteursbond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
