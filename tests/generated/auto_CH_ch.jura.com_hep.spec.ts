import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.jura.com_hep', ['https://ch.jura.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
