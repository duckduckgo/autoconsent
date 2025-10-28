import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_les10meilleurs.net_p61', ['https://les10meilleurs.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
