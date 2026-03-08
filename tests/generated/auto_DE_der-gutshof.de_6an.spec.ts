import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-gutshof.de_6an', ['https://der-gutshof.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
