import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tonkuhle.de_8de', ['https://www.tonkuhle.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
