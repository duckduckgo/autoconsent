import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stahlshop.de_pak', ['https://stahlshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
