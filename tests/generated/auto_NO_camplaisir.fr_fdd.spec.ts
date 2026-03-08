import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_camplaisir.fr_fdd', ['https://camplaisir.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
