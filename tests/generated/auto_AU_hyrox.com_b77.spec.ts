import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hyrox.com_b77', ['https://hyrox.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
