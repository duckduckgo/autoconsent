import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_greenbuildingadvisor.com_6hp', ['https://www.greenbuildingadvisor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
