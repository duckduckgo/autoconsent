import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_1h5', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
