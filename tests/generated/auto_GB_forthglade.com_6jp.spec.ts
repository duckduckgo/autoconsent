import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forthglade.com_6jp', ['https://forthglade.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
