import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adhdmedisin.no_kle', ['https://adhdmedisin.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
