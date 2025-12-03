import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_moebel.de_yf1', ['https://www.moebel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
