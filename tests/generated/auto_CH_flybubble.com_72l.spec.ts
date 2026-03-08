import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flybubble.com_72l', ['https://flybubble.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
