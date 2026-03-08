import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_accsetups.com_o7s', ['https://accsetups.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
