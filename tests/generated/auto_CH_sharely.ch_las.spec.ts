import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sharely.ch_las', ['https://www.sharely.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
