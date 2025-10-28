import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_doctena.ch_ryv', ['https://www.doctena.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
