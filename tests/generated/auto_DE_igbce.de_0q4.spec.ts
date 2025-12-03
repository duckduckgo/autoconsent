import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igbce.de_0q4', ['https://igbce.de/igbce'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
