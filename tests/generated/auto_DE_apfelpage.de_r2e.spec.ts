import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apfelpage.de_r2e', ['https://www.apfelpage.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
