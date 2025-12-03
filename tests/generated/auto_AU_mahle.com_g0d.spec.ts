import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mahle.com_g0d', ['https://www.mahle.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
