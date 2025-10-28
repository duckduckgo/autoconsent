import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newcastleairport.com_yv3', ['https://www.newcastleairport.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
