import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wittich.de_yi3', ['https://www.wittich.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
