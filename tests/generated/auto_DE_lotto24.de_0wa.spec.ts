import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotto24.de_0wa', ['https://www.lotto24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
