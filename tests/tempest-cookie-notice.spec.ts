import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tempest-cookie-notice',
    ['https://www.visitpittsburgh.com/things-to-do/', 'https://www.visitspokane.com/', 'https://www.visitoverlandpark.com/'],
    {},
);
