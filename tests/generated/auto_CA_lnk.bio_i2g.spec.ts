import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lnk.bio_i2g', ['https://lnk.bio/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
