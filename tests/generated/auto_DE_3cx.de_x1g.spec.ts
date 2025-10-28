import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3cx.de_x1g', ['https://www.3cx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
