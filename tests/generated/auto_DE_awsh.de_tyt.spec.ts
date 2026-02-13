import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_awsh.de_tyt', ['https://www.awsh.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
