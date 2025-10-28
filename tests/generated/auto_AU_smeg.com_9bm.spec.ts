import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_smeg.com_9bm', ['https://www.smeg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
