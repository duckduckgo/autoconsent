import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_birminghamairport.co.uk_j0k', ['https://www.birminghamairport.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
