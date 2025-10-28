import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lowbeats.de_7v0', ['https://www.lowbeats.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
