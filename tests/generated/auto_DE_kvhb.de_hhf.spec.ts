import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kvhb.de_hhf', ['https://www.kvhb.de/start'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
