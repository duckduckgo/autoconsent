import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_visit.alsace_id3', ['https://www.visit.alsace/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
