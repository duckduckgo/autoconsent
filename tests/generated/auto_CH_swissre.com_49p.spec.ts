import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissre.com_49p', ['https://www.swissre.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
