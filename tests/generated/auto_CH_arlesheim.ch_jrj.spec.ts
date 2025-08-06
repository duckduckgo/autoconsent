import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arlesheim.ch_jrj', ['https://www.arlesheim.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
