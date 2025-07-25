import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arket.com_htm', ['https://www.arket.com/de-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
