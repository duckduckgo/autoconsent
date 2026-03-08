import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blumen-senf.de_rt5', ['https://blumen-senf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
