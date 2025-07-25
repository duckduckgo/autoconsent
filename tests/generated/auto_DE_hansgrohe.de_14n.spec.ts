import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hansgrohe.de_14n', ['https://www.hansgrohe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
