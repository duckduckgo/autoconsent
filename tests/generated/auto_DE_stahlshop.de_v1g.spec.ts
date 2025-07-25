import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stahlshop.de_v1g', ['https://stahlshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
