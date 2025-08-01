import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medipreis.de_s4g', ['https://www.medipreis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
