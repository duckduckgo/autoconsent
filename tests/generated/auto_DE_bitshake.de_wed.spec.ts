import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bitshake.de_wed', ['https://bitshake.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
