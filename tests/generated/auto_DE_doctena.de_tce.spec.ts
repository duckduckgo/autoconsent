import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_doctena.de_tce', ['https://www.doctena.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
