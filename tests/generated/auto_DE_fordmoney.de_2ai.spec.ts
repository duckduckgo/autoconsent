import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fordmoney.de_2ai', ['https://www.fordmoney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
