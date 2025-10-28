import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_senevita.ch_h4m', ['https://www.senevita.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
