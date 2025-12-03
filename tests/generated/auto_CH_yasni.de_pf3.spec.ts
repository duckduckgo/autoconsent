import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yasni.de_pf3', ['https://www.yasni.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
