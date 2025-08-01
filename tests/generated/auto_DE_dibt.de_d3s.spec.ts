import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dibt.de_d3s', ['https://www.dibt.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
