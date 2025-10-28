import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.forvo.com_y2l', ['https://de.forvo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
