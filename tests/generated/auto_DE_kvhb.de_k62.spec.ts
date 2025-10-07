import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvhb.de_k62', ['https://www.kvhb.de/start'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
