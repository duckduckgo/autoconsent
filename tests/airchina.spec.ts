import generateCMPTests from '../playwright/runner';

const urls = ['https://www.airchina.it/', 'https://www.airchina.de/', 'https://www.airchina.co.uk/', 'https://www.airchina.us/'];

// saving the preferences reloads the page, so the self test cannot run
generateCMPTests('airchina', urls, { mobile: true, testSelfTest: false });
generateCMPTests('airchina', urls, { mobile: false, testSelfTest: false });
