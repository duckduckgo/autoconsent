import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_barclays.de_rqa', ['https://www.barclays.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
