import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tai-chi-classes.co.uk_xe3', ['http://www.tai-chi-classes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
