import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fordmoney.de_mo3', ['https://www.fordmoney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
