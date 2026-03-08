import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_artec.de_5rd', ['https://artec.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
