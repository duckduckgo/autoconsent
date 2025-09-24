import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ukrainianlessons.com_qza', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
