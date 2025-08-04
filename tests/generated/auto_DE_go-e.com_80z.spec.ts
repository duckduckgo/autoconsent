import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_go-e.com_80z', ['https://go-e.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
