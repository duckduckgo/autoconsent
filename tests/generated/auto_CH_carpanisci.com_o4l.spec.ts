import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_carpanisci.com_o4l', ['https://carpanisci.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
