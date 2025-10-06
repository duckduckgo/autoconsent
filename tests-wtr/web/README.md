# AutoConsent Web Tests

This directory contains comprehensive Web Test Runner (WTR) tests for the main `web.ts` file in AutoConsent. These tests cover the core functionality of the AutoConsent library.

## Test Structure

The tests are organized into several files, each focusing on different aspects of the `AutoConsent` class:

### 1. `web-basic.test.ts` / `web-basic.test.html`
**Basic functionality and initialization**
- AutoConsent instance creation with and without config
- Configuration validation and error handling  
- State management and message sending
- Prehide logic and focus management
- Basic property validation

### 2. `web-cmp-detection.test.ts` / `web-cmp-detection.test.html`
**CMP detection and filtering logic**
- CMP detection with mock CMPs
- Site-specific rule prioritization
- CMP filtering based on configuration
- Error handling during detection
- Popup detection and waiting logic
- Multiple popup handling

### 3. `web-actions.test.ts` / `web-actions.test.html`
**User actions and message handling**
- Opt-out and opt-in actions
- Self-test functionality
- Background message handling (initResp, optOut, optIn, selfTest)
- Popup handling with different autoAction settings
- Complete lifecycle management

### 4. `web-edge-cases.test.ts` / `web-edge-cases.test.html`
**Error handling and edge cases**
- CMP detection and action errors
- Intermediate CMP handling
- Frame context filtering
- Run context validation
- Multiple CMP detection scenarios
- State consistency validation
- Filter list fallback behavior

## Key Test Features

### Mock Implementations
- **MockMessageSender**: Captures and analyzes messages sent to the background
- **TestCMP**: Configurable mock CMP implementation for testing various scenarios
- **FailingCMP**: Mock CMP that throws errors for testing error handling
- **IntermediateCMP**: Mock CMP for testing intermediate states

### Test Utilities
- **createMockSender()**: Creates mock message sender with message tracking
- **createConfig()**: Creates test configuration with overrides
- **Type-safe message filtering**: Helper methods to get messages by type

### Coverage Areas

The tests provide comprehensive coverage of:

1. **Initialization and Configuration**
   - Constructor behavior with different parameters
   - Config validation and normalization
   - Rule parsing and filtering

2. **CMP Detection Flow**
   - Detection algorithms and retry logic
   - Site-specific vs generic rule prioritization
   - Frame context and run context filtering
   - Error handling during detection

3. **User Actions**
   - Opt-out and opt-in workflows
   - Self-test execution
   - Focus management during actions
   - Prehiding behavior

4. **Message Communication**
   - Background message handling
   - State reporting
   - Error reporting
   - Lifecycle event communication

5. **Edge Cases and Error Handling**
   - Network failures and timeouts
   - Malformed CMP responses  
   - DOM manipulation errors
   - Multiple CMP scenarios
   - Frame context edge cases

## Running the Tests

To run these tests, use the Web Test Runner command:

```bash
npm run test:lib
```

The tests will run in real browsers and validate the behavior of the AutoConsent web logic in actual DOM environments.

## Test Dependencies

- `@esm-bundle/chai` - Assertion library
- `@web/test-runner-mocha` - Test framework
- Browser environment for DOM testing

## Key Test Patterns

1. **Setup/Teardown**: Each test suite uses `beforeEach` to create fresh instances
2. **Mocking**: Extensive use of mock objects to isolate units under test
3. **Async Testing**: Proper handling of Promise-based AutoConsent methods
4. **DOM Testing**: Tests that require DOM manipulation use appropriate cleanup
5. **Error Testing**: Systematic testing of error conditions and recovery

These tests ensure that the AutoConsent web logic behaves correctly across different scenarios and provides confidence when making changes to the core functionality.