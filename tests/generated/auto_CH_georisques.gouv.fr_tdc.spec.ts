import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_georisques.gouv.fr_tdc', ['https://www.georisques.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
