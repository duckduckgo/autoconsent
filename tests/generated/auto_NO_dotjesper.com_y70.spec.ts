import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dotjesper.com_y70', ['https://dotjesper.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
