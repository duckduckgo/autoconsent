import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobvector.de_98p', ['https://www.jobvector.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
