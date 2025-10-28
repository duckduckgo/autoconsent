import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aujardin.org_5q2', ['https://www.aujardin.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
