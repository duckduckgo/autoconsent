import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonprix.de_2rt', ['https://www.bonprix.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
