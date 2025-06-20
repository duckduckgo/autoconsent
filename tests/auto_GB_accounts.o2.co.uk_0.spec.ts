import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'auto_GB_accounts.o2.co.uk_0',
    [
        'https://accounts.o2.co.uk/auth?sendTo=https%3A%2F%2Faccounts.o2.co.uk%2F%3Fcheckproduct%3Dtrue&failureUrl=https%3A%2F%2Faccounts.o2.co.uk%2F&auth_requirement_id=3e621702-f4bf-4ce1-9aae-6cffeb444706',
    ],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] },
);
