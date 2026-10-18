import generateCMPTests from '../playwright/runner';

// the page reloads after a choice is made, so the self-test runs on a page without the popup
generateCMPTests('cookiebar-tra', ['https://www.fascicolosanitario.gov.it/', 'https://www.adm.gov.it/', 'https://www.mase.gov.it/'], {
    testSelfTest: false,
});
