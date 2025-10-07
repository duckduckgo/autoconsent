import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fobizz.com_zhe', ['https://fobizz.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
