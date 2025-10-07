import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uestra.de_4cp', ['https://www.uestra.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
