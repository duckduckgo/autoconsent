import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_formula1.com_b7k', ['https://www.formula1.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
