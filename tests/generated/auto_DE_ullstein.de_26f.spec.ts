import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ullstein.de_26f', ['https://www.ullstein.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
