import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_med-mag.de_6q9', ['https://www.med-mag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
