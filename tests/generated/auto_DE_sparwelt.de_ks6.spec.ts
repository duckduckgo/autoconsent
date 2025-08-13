import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparwelt.de_ks6', ['https://www.sparwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
