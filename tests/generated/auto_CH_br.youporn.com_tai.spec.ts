import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_br.youporn.com_tai', ['https://br.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
