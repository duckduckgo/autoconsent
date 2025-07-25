import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_samen.de_yhs', ['https://samen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
