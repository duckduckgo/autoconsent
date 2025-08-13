import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.airbnb.ch_95k', ['https://fr.airbnb.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
