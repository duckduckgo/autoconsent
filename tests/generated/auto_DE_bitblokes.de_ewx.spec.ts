import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bitblokes.de_ewx', ['https://www.bitblokes.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
