/**
 * Constants used in compliance testing
 */
const constants = {
  Fdc3Timeout: 500, // The amount of time to wait for the FDC3Ready event during initialisation
  TestTimeout: 9000, // Tests that take longer than this (in milliseconds) will fail
  WaitTime: 5000, // The amount of time to wait for mock apps to finish processing
  NoListenerTimeout: 60000, // The amount of time to wait for error when expected context or intent listener isn't added
  WindowCloseWaitTime: 750, // The amount of time to allow for clean-up of closed windows
} as const;

export default constants;
