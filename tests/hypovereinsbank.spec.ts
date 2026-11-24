import generateCMPTests from '../playwright/runner';

// The site reloads the page after a choice is made, so the self-test message is lost
generateCMPTests('hypovereinsbank', ['https://www.hypovereinsbank.de/'], { testSelfTest: false });
