import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wittich.de_jqw', ['https://www.wittich.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
