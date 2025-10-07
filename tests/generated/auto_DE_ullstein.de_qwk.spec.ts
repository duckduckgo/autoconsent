import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ullstein.de_qwk', ['https://www.ullstein.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
