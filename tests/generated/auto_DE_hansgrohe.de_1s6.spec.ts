import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hansgrohe.de_1s6', ['https://www.hansgrohe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
