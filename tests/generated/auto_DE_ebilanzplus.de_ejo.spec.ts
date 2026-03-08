import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ebilanzplus.de_ejo', ['https://ebilanzplus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
