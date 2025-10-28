import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bodleian.ox.ac.uk_k9x', ['https://www.bodleian.ox.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
