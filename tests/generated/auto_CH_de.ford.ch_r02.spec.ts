import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.ford.ch_r02', ['https://www.de.ford.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
