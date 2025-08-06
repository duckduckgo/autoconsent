import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skandi.de_pfj', ['https://www.skandi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
