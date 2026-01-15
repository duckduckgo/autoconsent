import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3cx.de_cu9', ['https://www.3cx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
