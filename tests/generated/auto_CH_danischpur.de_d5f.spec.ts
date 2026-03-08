import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_danischpur.de_d5f', ['https://danischpur.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
