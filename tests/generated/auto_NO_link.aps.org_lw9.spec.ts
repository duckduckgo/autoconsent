import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_link.aps.org_lw9', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
