import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_linkedin.com_cio',
    ['https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fnl.linkedin.com%2F'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] },
);
