import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fobizz.com_ady', ['https://fobizz.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
