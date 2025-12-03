import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daad.de_w45', ['https://www.daad.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
