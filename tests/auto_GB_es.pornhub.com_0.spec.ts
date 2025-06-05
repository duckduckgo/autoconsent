import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_es.pornhub.com_0', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
