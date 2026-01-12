import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ruhrbahn.de_yaq', ['https://www.ruhrbahn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
