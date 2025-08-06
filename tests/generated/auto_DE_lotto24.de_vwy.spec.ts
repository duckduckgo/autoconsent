import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotto24.de_vwy', ['https://www.lotto24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
