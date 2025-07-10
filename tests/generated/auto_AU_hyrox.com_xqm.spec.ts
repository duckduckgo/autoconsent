import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hyrox.com_xqm', ['https://hyrox.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
