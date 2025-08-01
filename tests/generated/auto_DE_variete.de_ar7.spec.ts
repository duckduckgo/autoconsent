import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_variete.de_ar7', ['https://www.variete.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
