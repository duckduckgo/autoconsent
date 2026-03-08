import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_albertinen.de_3on', ['https://albertinen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
