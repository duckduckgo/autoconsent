import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bgetem.de_x2e', ['https://www.bgetem.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
