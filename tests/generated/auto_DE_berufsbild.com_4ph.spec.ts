import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berufsbild.com_4ph', ['https://berufsbild.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
