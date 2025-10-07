import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hot.com_fzm', ['https://hot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
