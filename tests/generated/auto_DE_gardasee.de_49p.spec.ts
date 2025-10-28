import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gardasee.de_49p', ['https://www.gardasee.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
