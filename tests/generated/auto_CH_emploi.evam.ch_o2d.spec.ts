import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_emploi.evam.ch_o2d', ['https://emploi.evam.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
