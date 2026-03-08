import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aoc.com_1qz', ['https://aoc.com/au'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
