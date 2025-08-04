import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_2dq', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
