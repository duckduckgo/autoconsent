import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobvector.de_lkt', ['https://www.jobvector.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
