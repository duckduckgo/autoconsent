import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wittich.de_sfl', ['https://www.wittich.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
