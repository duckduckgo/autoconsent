import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wolt.com_6mp', ['https://wolt.com/en/deu'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
