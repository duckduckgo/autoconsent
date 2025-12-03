import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emp.de_23v', ['https://www.emp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
