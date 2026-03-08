import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bike-alm.de_jh8', ['https://bike-alm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
