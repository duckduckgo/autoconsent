import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_land.nrw_3hm', ['https://www.land.nrw/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
