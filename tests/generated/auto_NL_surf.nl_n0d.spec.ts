import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_surf.nl_n0d', ['https://www.surf.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
