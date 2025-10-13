import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apfelpage.de_0fg', ['https://www.apfelpage.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
