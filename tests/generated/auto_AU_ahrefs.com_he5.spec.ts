import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ahrefs.com_he5', ['https://ahrefs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
