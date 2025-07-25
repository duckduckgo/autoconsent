import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_land.nrw_s3i', ['https://www.land.nrw/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
