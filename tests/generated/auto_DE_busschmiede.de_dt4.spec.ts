import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_busschmiede.de_dt4', ['https://busschmiede.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
