import generateCMPTests from '../playwright/runner';

const urls = ['https://www.juzaphoto.com/home.php?l=it', 'https://www.juzaphoto.com/home.php?l=en'];

// the site reloads the page after a choice is made, so the self-test cannot run on the original page
generateCMPTests('juzaphoto', urls, { mobile: true, testSelfTest: false });
generateCMPTests('juzaphoto', urls, { mobile: false, testSelfTest: false });
