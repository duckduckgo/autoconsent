import generateCMPTests from '../playwright/runner';

// the site hides the deny button with CSS; it sets the same cookie as the "Nei" choice on the site's cookie page
generateCMPTests('freak.no', ['https://freak.no/']);
