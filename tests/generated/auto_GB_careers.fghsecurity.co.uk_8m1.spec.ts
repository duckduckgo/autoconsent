import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.fghsecurity.co.uk_8m1', ['https://careers.fghsecurity.co.uk/vacancies/vacancy-search-results.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
