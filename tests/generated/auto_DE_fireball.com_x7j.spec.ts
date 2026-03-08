import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fireball.com_x7j', ['https://fireball.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
