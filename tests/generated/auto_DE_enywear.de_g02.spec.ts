import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_enywear.de_g02', ['https://enywear.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
