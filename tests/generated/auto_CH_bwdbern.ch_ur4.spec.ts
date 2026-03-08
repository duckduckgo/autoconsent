import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bwdbern.ch_ur4', ['https://bwdbern.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
