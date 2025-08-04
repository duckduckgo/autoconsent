import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bandlab.com_qmj', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
