import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_barclays.de_p1q', ['https://www.barclays.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
