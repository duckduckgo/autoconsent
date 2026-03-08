import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ed-info.de_662', ['https://ed-info.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
