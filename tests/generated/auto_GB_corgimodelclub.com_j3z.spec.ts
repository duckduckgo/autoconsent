import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_corgimodelclub.com_j3z', ['https://corgimodelclub.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
