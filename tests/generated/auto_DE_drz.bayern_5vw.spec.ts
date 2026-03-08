import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drz.bayern_5vw', ['https://drz.bayern/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
