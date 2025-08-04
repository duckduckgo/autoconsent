import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_h7g', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
