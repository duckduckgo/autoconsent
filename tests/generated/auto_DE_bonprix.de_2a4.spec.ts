import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonprix.de_2a4', ['https://www.bonprix.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
