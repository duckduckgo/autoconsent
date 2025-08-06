import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lesejury.de_4ub', ['https://www.lesejury.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
