import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_astroshop.de_whh', ['https://www.astroshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
