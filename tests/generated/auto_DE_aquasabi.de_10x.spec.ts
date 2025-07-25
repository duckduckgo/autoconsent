import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aquasabi.de_10x', ['https://www.aquasabi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
