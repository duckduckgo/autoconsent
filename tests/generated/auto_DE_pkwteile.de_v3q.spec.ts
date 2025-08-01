import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pkwteile.de_v3q', ['https://www.pkwteile.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
