import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pro.lovdata.no_xap', ['https://pro.lovdata.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
