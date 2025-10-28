import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_visitnsw.com_y5j', ['https://www.visitnsw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
