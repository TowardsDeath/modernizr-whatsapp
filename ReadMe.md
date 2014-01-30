# Modernizr WhatsApp

A simple Modernizr test for checking whether the visitor's OS has support for WhatsApp.

## Why?

This test was created to be able to show a WhatsApp social sharing button only on those devices that support WhatsApp. Responsive design isn't enough to accomplish this. A small screen doesn't necessarily indicate a smartphone; it can just as well be a small desktop screen, or a phone that can't run WhatsApp. Enter Modernizr. This test sniffs the user agent and checks it against a pre-defined list of operating systems that support WhatsApp.

## Try it

Open the [test page](http://donormal.github.io/modernizr-whatsapp) on your favourite device and see if it works.

## Contribute

If you find a flaw in the test's outcome, feel free to send in a pull request.

## Acknowledgements

- The test was created in a few minutes and therefore isn't conclusive. However, it's enough to cover 95% of all cases.
- WhatsApp doesn't work on Android tablets, but this test doesn't exclude those devices.
- The Android check doesn't yet take the version into account (Android OS 2.1 and above).