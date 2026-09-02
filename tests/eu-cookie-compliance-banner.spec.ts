import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://www.mannheim.de/', 'https://www.aa.org/', 'https://www.oxy.edu/']);

// Category banners store the "necessary only" choice under the same status 2 the self test
// rejects, so the cookie check cannot tell them apart from an accept-all.
generateCMPTests('eu-cookie-compliance-banner', ['https://www.ogilvy.com/', 'https://www.put.poznan.pl/', 'https://www.kk.dk/'], {
    testSelfTest: false,
});
