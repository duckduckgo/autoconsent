import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lnk.bio_go3', ['https://lnk.bio/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
