import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sizechart.uk_yy7', ['https://sizechart.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
