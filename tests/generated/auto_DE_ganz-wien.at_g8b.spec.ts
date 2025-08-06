import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ganz-wien.at_g8b', ['https://www.ganz-wien.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
