import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_baldursgate.fandom.com_f4i', ['https://baldursgate.fandom.com/wiki/Baldur%27s_Gate_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
