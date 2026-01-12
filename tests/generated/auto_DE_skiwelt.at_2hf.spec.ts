import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skiwelt.at_2hf', ['https://www.skiwelt.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
