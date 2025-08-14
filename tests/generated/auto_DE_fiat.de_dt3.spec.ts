import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fiat.de_dt3', ['https://www.fiat.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
