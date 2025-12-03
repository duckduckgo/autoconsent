import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vivat.de_8dk', ['https://www.vivat.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
