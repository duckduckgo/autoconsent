import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fov.nl_raq', ['https://fov.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
