import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aknw.de_wcz', ['https://www.aknw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
