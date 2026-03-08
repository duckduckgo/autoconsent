import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cotswoldsdesigneroutlet.com_pkm', ['https://cotswoldsdesigneroutlet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
