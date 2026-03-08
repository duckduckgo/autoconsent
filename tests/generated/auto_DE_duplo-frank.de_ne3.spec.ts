import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_duplo-frank.de_ne3', ['https://duplo-frank.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
