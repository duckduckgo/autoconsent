import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_9aa', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
