import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_dropbox.com_4', ['https://www.dropbox.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
