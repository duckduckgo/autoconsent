import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fixpart.de_0hd', ['https://fixpart.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
