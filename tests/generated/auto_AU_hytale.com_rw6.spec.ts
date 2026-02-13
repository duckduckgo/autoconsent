import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hytale.com_rw6', ['https://hytale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
