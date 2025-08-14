import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_crow.nl_z0j', ['https://www.crow.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
