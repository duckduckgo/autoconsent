import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dibt.de_vsz', ['https://www.dibt.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
