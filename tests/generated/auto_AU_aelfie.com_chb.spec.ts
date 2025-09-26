import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aelfie.com_chb', ['https://aelfie.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
