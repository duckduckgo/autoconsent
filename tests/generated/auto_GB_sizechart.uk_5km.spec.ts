import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sizechart.uk_5km', ['https://sizechart.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
