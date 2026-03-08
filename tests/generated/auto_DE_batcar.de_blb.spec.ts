import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_batcar.de_blb', ['https://batcar.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
