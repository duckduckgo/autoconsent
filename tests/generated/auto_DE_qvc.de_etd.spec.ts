import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_qvc.de_etd', ['https://www.qvc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
