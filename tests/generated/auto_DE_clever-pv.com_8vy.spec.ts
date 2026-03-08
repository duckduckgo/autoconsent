import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_clever-pv.com_8vy', ['https://clever-pv.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
