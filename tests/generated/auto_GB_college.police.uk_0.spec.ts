import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_college.police.uk_0', ['https://www.college.police.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
