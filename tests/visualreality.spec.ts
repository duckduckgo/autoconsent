import generateCMPTests from '../playwright/runner';

const urls = ['https://www.tournamentsoftware.com/', 'https://www.turnier.de/', 'https://www.toernooi.nl/', 'https://www.vetts.org.uk/'];

// Destination pages may load a separate ad consent iframe (nojazz) after the cookiewall is submitted
generateCMPTests('visualreality', urls, { expectedRuns: 2, mobile: false });
generateCMPTests('visualreality', urls, { expectedRuns: 2, mobile: true });
