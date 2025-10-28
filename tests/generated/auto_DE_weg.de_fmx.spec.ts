import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weg.de_fmx', ['https://www.weg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
