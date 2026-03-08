import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cputemper.com_mdc', ['https://cputemper.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
