import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.ford.ch_voi', ['https://www.fr.ford.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
