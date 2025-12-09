import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinoheld.de_y70', ['https://www.kinoheld.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
