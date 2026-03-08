import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bewerbung.co_nte', ['https://bewerbung.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
