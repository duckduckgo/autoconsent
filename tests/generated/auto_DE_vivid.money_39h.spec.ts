import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_39h', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
