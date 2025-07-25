import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lesejury.de_7ej', ['https://www.lesejury.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
