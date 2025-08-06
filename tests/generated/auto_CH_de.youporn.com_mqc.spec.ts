import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.youporn.com_mqc', ['https://de.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
