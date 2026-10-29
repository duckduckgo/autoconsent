import generateCMPTests from '../playwright/runner';

// opt-out continues on the /privacy page, so autoconsent runs once per page
generateCMPTests('prestomusic', ['https://www.prestomusic.com/'], { expectedRuns: 2 });
// reached via the banner's "Manage settings" button
generateCMPTests('prestomusic-privacy-page', ['https://www.prestomusic.com/privacy?back=%2F']);
