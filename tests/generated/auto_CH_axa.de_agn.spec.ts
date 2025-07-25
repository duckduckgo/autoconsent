import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_axa.de_agn', ['https://www.axa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
