import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wien.gv.at_mm2', ['https://www.wien.gv.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
