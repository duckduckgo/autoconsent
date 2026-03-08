import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dein-fonds.de_gbs', ['https://dein-fonds.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
