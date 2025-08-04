import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bandlab.com_6l6', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
