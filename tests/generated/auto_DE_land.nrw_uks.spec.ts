import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_land.nrw_uks', ['https://www.land.nrw/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
