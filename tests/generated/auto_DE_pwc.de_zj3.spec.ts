import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pwc.de_zj3', ['https://www.pwc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
