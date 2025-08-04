import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_6w2', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
