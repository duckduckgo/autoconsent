import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_oxq', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
