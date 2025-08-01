import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doyondespres.com_fxl', ['https://www.doyondespres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
