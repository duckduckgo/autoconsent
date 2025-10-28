import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frankonia.de_2hr', ['https://www.frankonia.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
