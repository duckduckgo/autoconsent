import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emp.de_kbc', ['https://www.emp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
