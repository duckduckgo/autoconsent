/**
 * This is a list of all allowed properties on rule step keys.
 * We can use this to validate if a given step is supported by
 * the current library version.
 */
export const PERMITTED_STEP_KEYS = [
    'cookieContains',
    'negated',
    'any',
    'if',
    'then',
    'else',
    'hide',
    'method',
    'wait',
    'waitForThenClick',
    'timeout',
    'all',
    'click',
    'waitForVisible',
    'check',
    'waitFor',
    'eval',
    'visible',
    'exists',
    'optional',
    'comment',
];
