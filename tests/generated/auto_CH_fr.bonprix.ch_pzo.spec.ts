import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.bonprix.ch_pzo', ['https://fr.bonprix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
