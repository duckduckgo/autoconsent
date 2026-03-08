import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bahnundbuch.de_665', ['https://bahnundbuch.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
