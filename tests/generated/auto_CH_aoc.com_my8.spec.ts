import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aoc.com_my8', ['https://aoc.com/ch-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
