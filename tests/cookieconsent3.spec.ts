import generateCMPTests from '../playwright/runner';

// consent may be stored in localStorage (odprentals) or arrive late (bookboon), so the cookie self-test is unreliable
generateCMPTests('cookieconsent3', ['https://bookboon.com/', 'https://odprentals.co.za/'], {
    testSelfTest: false,
});
