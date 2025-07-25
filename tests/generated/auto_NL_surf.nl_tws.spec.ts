import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_surf.nl_tws', ['https://www.surf.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
