import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doyondespres.com_4jr', ['https://www.doyondespres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
