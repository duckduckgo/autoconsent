import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cuba-buddy.de_j76', ['https://cuba-buddy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
