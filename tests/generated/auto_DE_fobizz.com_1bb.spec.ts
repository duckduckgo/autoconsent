import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fobizz.com_1bb', ['https://fobizz.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
