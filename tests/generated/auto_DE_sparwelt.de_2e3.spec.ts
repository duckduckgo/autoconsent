import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparwelt.de_2e3', ['https://www.sparwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
