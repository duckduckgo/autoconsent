import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thws.de_swx', ['https://www.thws.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
