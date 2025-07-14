import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hyrox.com_j0m', ['https://hyrox.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
