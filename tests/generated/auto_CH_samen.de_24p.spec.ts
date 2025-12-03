import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_samen.de_24p', ['https://samen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
