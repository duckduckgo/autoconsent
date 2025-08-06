import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emp.de_9yj', ['https://www.emp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
