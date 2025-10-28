import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blutwerte.de_9k5', ['https://blutwerte.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
