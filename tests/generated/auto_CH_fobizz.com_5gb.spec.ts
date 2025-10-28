import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fobizz.com_5gb', ['https://fobizz.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
