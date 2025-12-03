import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.youporn.com_vsb', ['https://de.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
