import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brandible.de_de6', ['https://www.brandible.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
