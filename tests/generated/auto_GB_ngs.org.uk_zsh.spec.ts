import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ngs.org.uk_zsh', ['https://ngs.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
