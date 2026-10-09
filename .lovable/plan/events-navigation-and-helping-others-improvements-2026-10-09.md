# Events, Navigation, and Helping Others Improvements

## 1. Match Upcoming Events to Regular Activities

- Replace the current large image-card treatment for Upcoming Events with the same clean horizontal row format used by Regular Activities.
- Keep the Upcoming Events list manually editable in the project, including date, time, category, description, and location.
- Preserve automatic removal of past dated events and the existing empty message when no upcoming events are entered.
- Keep Regular Activities unchanged.

## 2. Always Open New Pages at the Top

- Add one shared navigation behavior that scrolls to the top whenever visitors move to a different church page.
- Apply it to all internal navigation, including About Us, menu links, footer links, cards, and browser back/forward navigation.
- Keep same-page intentional section links working when a URL includes a section anchor.

## 3. Correct Volunteer and YouTube Destinations

- Point the Helping Others volunteer action directly to `https://pcc-dover.org/volunteer`.
- Use `https://www.youtube.com/@PeoplesChurchDover/videos` for general YouTube and recorded-service links.
- Keep links specifically labeled for live worship pointed to the channel's live-stream page.
- Open Community Center and YouTube destinations safely in a new tab.

## 4. Redesign Helping Others and Getting Help

- Replace the generic shared placeholder layout with a dedicated page for this content.
- Present three clear, visually distinct paths: volunteer, church-member pastoral support, and community assistance.
- Use the established church purple, green action color, Century Gothic typography, and simple supportive icons.
- Make the volunteer page, pastor email, phone number, Community Center help link, and Contact Us action prominent and easy to use on phone and desktop.
- Preserve the current approved wording and contact details; only reorganize and polish their presentation.

## Verification

- Test page-to-page scrolling with desktop and mobile navigation, including About Us and browser back/forward.
- Check Upcoming Events with no entries and with sample dated entries without leaving sample content behind.
- Verify volunteer, YouTube videos, live-stream, phone, email, and Community Center links.
- Review the Helping Others page at phone and desktop sizes and confirm the current theme still works.

## Technical notes

- Use a route-aware scroll manager inside the existing router rather than adding page-specific scroll code.
- Keep events as local typed data; reuse one horizontal event-row presentation for both event sections where practical.
- Build Helping Others as its own page presentation so other pages that still use the shared placeholder are not unintentionally changed.
