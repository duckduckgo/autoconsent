import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_itsco.de_o70', ['https://www.itsco.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
