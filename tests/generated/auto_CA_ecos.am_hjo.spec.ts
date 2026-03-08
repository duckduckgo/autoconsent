import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ecos.am_hjo', ['https://ecos.am/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
