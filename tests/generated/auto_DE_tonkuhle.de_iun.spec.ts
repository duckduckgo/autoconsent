import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tonkuhle.de_iun', ['https://www.tonkuhle.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
