import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_phbern.ch_tro', ['https://www.phbern.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
