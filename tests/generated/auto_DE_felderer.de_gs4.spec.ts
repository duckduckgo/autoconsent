import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_felderer.de_gs4', ['https://felderer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
