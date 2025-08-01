import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_barclays.de_fg3', ['https://www.barclays.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
