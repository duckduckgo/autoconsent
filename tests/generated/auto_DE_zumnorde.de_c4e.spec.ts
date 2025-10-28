import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zumnorde.de_c4e', ['https://www.zumnorde.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
