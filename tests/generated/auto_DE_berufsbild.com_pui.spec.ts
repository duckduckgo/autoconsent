import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berufsbild.com_pui', ['https://berufsbild.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
