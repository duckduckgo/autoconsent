import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mgmotor.de_uv1', ['https://www.mgmotor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
