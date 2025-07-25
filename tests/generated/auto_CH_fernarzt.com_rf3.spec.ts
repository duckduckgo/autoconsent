import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fernarzt.com_rf3', ['https://www.fernarzt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
