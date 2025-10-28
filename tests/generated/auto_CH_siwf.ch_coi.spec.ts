import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_siwf.ch_coi', ['https://www.siwf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
