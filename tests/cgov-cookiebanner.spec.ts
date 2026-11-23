import generateCMPTests from '../playwright/runner';

generateCMPTests('cgov-cookiebanner', ['https://www.charnwood.gov.uk/', 'https://www.oadby-wigston.gov.uk/']);

// the form submit reloads the page before the self test can run
generateCMPTests('cgov-cookiebanner', ['https://www.nwleics.gov.uk/'], { testSelfTest: false });
