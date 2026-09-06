import generateCMPTests from '../playwright/runner';

generateCMPTests('opera.com', ['https://www.opera.com']);
// The newer panel is only revealed after the first interaction with the page.
generateCMPTests('opera.com', ['https://www.operaneon.com'], { interactWithPage: true });
