import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.jura.com_6al', ['https://ch.jura.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
