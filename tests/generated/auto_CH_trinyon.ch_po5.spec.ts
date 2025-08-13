import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trinyon.ch_po5', ['https://www.trinyon.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
