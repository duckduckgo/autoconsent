import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nanu-nana.de_7kx', ['https://www.nanu-nana.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
