import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lnk.bio_ia7', ['https://lnk.bio/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
