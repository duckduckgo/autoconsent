import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_smeg.com_un1', ['https://www.smeg.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
