import generateCMPTests from '../playwright/runner';

// opting out submits a form that reloads the page, so the self test runs against the page being unloaded
generateCMPTests('scb.se', ['https://www.scb.se/', 'https://www.scb.se/en/'], { testSelfTest: false });
