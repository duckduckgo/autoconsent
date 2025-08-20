import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doyondespres.com_ed1', ['https://www.doyondespres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
