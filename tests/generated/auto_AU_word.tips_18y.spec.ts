import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_word.tips_18y', ['https://word.tips/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
