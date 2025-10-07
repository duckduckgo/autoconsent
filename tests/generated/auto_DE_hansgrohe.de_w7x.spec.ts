import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hansgrohe.de_w7x', ['https://www.hansgrohe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
