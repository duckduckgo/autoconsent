import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparwelt.de_74f', ['https://www.sparwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
