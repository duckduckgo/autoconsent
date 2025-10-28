import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_engadin.com_sy3', ['https://www.engadin.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
