import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aoc.com_dib', ['https://aoc.com/ch-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
