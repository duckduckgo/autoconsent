import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wolt.com_ujp', ['https://wolt.com/en/deu'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
