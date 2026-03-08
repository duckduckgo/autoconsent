import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_birkhauser.com_nax', ['https://birkhauser.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
