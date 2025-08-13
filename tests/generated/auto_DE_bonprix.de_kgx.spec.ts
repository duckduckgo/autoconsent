import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bonprix.de_kgx', ['https://www.bonprix.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
