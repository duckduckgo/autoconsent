import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayerischerbauernverband.de_zbt', ['https://www.bayerischerbauernverband.de/?lat=50.1109221&long=8.6821267'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
