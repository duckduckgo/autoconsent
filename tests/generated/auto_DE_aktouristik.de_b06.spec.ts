import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aktouristik.de_b06', ['https://aktouristik.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
