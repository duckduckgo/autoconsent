import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparwelt.de_lff', ['https://www.sparwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
