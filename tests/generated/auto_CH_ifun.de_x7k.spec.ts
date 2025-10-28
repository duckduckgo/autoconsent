import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ifun.de_x7k', ['https://www.ifun.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
