import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_blooket.com_mym', ['https://www.blooket.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
