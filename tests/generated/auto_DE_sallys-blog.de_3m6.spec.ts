import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sallys-blog.de_3m6', ['https://sallys-blog.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
