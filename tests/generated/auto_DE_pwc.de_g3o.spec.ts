import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pwc.de_g3o', ['https://www.pwc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
