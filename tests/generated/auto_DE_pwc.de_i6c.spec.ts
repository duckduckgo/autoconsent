import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pwc.de_i6c', ['https://www.pwc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
