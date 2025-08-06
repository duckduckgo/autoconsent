import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivid.money_sw3', ['https://vivid.money/en-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
