import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobvector.de_641', ['https://www.jobvector.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
