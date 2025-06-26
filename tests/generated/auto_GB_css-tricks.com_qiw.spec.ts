import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_css-tricks.com_qiw', ['https://css-tricks.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
