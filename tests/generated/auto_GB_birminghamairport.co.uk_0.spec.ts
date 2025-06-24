import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_birminghamairport.co.uk_0', ['https://www.birminghamairport.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
