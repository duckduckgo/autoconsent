import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leslez.com_8oy', ['https://porno.fm/categories/lesbian'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
