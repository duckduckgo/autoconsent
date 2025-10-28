import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_samnaun.ch_6oi', ['https://www.samnaun.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
