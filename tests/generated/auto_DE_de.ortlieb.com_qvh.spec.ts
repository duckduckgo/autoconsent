import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.ortlieb.com_qvh', ['https://de.ortlieb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
