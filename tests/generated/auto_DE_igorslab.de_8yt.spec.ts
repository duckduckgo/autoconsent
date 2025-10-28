import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igorslab.de_8yt', ['https://www.igorslab.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
