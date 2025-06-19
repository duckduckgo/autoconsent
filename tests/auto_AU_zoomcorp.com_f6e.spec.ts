import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_zoomcorp.com_f6e', ['https://zoomcorp.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
