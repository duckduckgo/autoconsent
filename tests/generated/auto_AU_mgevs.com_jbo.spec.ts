import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mgevs.com_jbo', ['https://www.mgevs.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
