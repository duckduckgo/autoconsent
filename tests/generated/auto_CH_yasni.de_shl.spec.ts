import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yasni.de_shl', ['https://www.yasni.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
