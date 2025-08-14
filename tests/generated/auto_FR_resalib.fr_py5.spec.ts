import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_resalib.fr_py5', ['https://www.resalib.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
