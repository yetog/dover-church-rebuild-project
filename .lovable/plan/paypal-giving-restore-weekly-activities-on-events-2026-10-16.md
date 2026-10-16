# PayPal giving + restore weekly activities on Events

## 1. Give page: PayPal
- "Online Giving" card button becomes **Give Online with PayPal**, opening https://www.paypal.com/ncp/payment/M4ESZ9QJUW55J in a new tab (same as your PayPal code, but labeled "Give" instead of "Buy Now").
- Show the PayPal card logos and "Powered by PayPal" under the button, as in your code.
- Add a "Scan to Give" block with your QR code ("Steward the work of People's Church of Dover") so phone users can scan it from the screen or a printed bulletin.
- Card description changes to "Give securely online through PayPal using a card or PayPal account." In-Person and By Mail stay as they are.

## 2. Events page: both sections
- **Upcoming Events** stays on top with its current entries.
- **Every Week at People's Church** (the weekly activities list) comes back underneath, in the same row style but on a soft purple background so the two sections look different.
- Both lists keep using the same shared entries, so editing one list updates the homepage too.

## Technical details
- Store the QR image as a hosted asset. Add `PAYPAL_GIVING_URL` to a shared links file.
- Add an optional `tone` prop to `NewsSection` (`default` | `tinted`); Happening renders it twice.
- Give option entries support external links (`<a target="_blank" rel="noopener noreferrer">`).
