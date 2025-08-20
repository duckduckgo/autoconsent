import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simplekey.de_xso', ['https://www.simplekey.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
