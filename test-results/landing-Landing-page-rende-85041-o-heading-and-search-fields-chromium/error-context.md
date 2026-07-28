# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing page >> renders the hero heading and search fields
- Location: e2e\landing.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Where')
Expected: visible
Error: strict mode violation: getByText('Where') resolved to 2 elements:
    1) <span class="text-sm text-[#808080] text-start">Where</span> aka getByText('WhereDubai, UAE▼')
    2) <p class="mt-2.5 text-base text-black md:text-lg lg:text-[20px] lg:leading-[30px]">From cosmopolitan cityscapes to cultural treasure…</p> aka getByText('From cosmopolitan cityscapes')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Where')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e4]:
      - img "Event venue crowd celebrating" [ref=e5]
      - generic [ref=e7]:
        - link [ref=e8] [cursor=pointer]:
          - /url: /
          - img "Venuze" [ref=e9]
        - generic [ref=e10]:
          - button "Add your listing" [ref=e11]
          - button "EN" [ref=e15]
          - button "Sign in" [ref=e19]
      - generic [ref=e23]:
        - heading "Celebrate in venues big and small" [level=1] [ref=e24]
        - generic [ref=e25]:
          - generic [ref=e26]:
            - button "Venue" [ref=e27]
            - button "Vendors" [ref=e31]
          - generic [ref=e35]:
            - combobox [ref=e36]:
              - generic [ref=e37]:
                - generic [ref=e38]: Where
                - generic [ref=e39]: Dubai, UAE
            - textbox [ref=e41]: Dubai, UAE
            - combobox [ref=e42]:
              - generic [ref=e43]:
                - generic [ref=e44]: When
                - generic [ref=e45]: Anytime
            - textbox [ref=e47]: Anytime
            - combobox [ref=e48]:
              - generic [ref=e49]:
                - generic [ref=e50]: Guests
                - generic [ref=e51]: 10-20
            - textbox [ref=e53]: 10-20
            - button "Search" [ref=e54]
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Find The Best Venue For Any Occasion" [level=2] [ref=e58]
        - paragraph [ref=e59]: Explore venues by category, from timeless ballrooms and rooftops with a view to modern studios and outdoor gardens, discover spaces designed to inspire unforgettable experiences.
      - generic [ref=e60]:
        - button "Celebration Venues 37 Venues Celebration Venues" [ref=e61]:
          - img "Celebration Venues" [ref=e62]
          - generic [ref=e64]: 37 Venues
          - generic [ref=e65]: Celebration Venues
        - button "Private Party Venues 37 Venues Private Party Venues" [ref=e66]:
          - img "Private Party Venues" [ref=e67]
          - generic [ref=e69]: 37 Venues
          - generic [ref=e70]: Private Party Venues
        - button "Corporate Meetings 37 Venues Corporate Meetings" [ref=e71]:
          - img "Corporate Meetings" [ref=e72]
          - generic [ref=e74]: 37 Venues
          - generic [ref=e75]: Corporate Meetings
        - button "Creative Studios 37 Venues Creative Studios" [ref=e76]:
          - img "Creative Studios" [ref=e77]
          - generic [ref=e79]: 37 Venues
          - generic [ref=e80]: Creative Studios
      - generic [ref=e81]:
        - button "Previous" [ref=e82]
        - button "Next" [ref=e83]
    - generic [ref=e86]:
      - generic [ref=e87]:
        - heading "Featured Venues" [level=2] [ref=e88]
        - generic [ref=e89]:
          - button "Rooftop" [ref=e90]
          - button "Gallery" [ref=e91]
          - button "Restaurant" [ref=e92]
          - button "Outdoor" [ref=e93]
          - button "Studio" [ref=e94]
          - button "terrace" [ref=e95]
          - button "ballroom" [ref=e96]
      - generic [ref=e97]:
        - generic [ref=e98]:
          - generic [ref=e99]:
            - img "ZETA Seventy Seven- Panoramic Rooftop Dining & Views with Infinity Pool Access" [ref=e100]
            - generic [ref=e101]: Verified
            - button "Share" [ref=e102]
            - button "Add to favorites" [ref=e105]
          - generic [ref=e108]:
            - heading "ZETA Seventy Seven- Panoramic Rooftop Dining & Views with Infinity Pool Access" [level=3] [ref=e109]
            - paragraph [ref=e110]: Address Hotels, Dubai
            - generic [ref=e111]:
              - generic [ref=e112]: 300+
              - generic [ref=e113]: 2,000 sq ft
              - generic [ref=e114]: Free parking
            - generic [ref=e115]: +25 more
            - separator [ref=e116]
            - generic [ref=e117]:
              - paragraph [ref=e118]: Contact for pricing
              - button "View details" [ref=e119]
        - generic [ref=e122]:
          - generic [ref=e123]:
            - img "Mercury- Elevated Rooftop Dining & Skyline Views Above Jumeirah Beach" [ref=e124]
            - generic [ref=e125]: Verified
            - button "Share" [ref=e126]
            - button "Add to favorites" [ref=e129]
          - generic [ref=e132]:
            - heading "Mercury- Elevated Rooftop Dining & Skyline Views Above Jumeirah Beach" [level=3] [ref=e133]
            - paragraph [ref=e134]: Four Seasons Hotels and Resorts, Dubai
            - generic [ref=e135]:
              - generic [ref=e136]: 300+
              - generic [ref=e137]: 2,000 sq ft
              - generic [ref=e138]: Free parking
            - generic [ref=e139]: +25 more
            - separator [ref=e140]
            - generic [ref=e141]:
              - paragraph [ref=e142]: Contact for pricing
              - button "View details" [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "Treehouse- Rooftop Lounge with Panoramic Skyline Views and Sunset Ambience" [ref=e148]
            - generic [ref=e149]: Verified
            - button "Share" [ref=e150]
            - button "Add to favorites" [ref=e153]
          - generic [ref=e156]:
            - heading "Treehouse- Rooftop Lounge with Panoramic Skyline Views and Sunset Ambience" [level=3] [ref=e157]
            - paragraph [ref=e158]: Taj Hotels Group, Dubai
            - generic [ref=e159]:
              - generic [ref=e160]: 300+
              - generic [ref=e161]: 2,000 sq ft
              - generic [ref=e162]: Free parking
            - generic [ref=e163]: +25 more
            - separator [ref=e164]
            - generic [ref=e165]:
              - paragraph [ref=e166]: Contact for pricing
              - button "View details" [ref=e167]
        - generic [ref=e170]:
          - generic [ref=e171]:
            - img "SoBe Rooftop Lounge - Sunset Views & Vibrant Nights at The Palm" [ref=e172]
            - generic [ref=e173]: Verified
            - button "Share" [ref=e174]
            - button "Add to favorites" [ref=e177]
          - generic [ref=e180]:
            - heading "SoBe Rooftop Lounge - Sunset Views & Vibrant Nights at The Palm" [level=3] [ref=e181]
            - paragraph [ref=e182]: W Dubai - The Palm, Dubai
            - generic [ref=e183]:
              - generic [ref=e184]: 300+
              - generic [ref=e185]: 2,000 sq ft
              - generic [ref=e186]: Free parking
            - generic [ref=e187]: +25 more
            - separator [ref=e188]
            - generic [ref=e189]:
              - paragraph [ref=e190]: Contact for pricing
              - button "View details" [ref=e191]
    - generic [ref=e194]:
      - generic [ref=e195]:
        - heading "Complete Your Event with our Trusted Vendors" [level=2] [ref=e196]
        - paragraph [ref=e197]: Venues are just the beginning. Discover caterers, decorators, photographers, entertainment, and more all in one place, ready to bring your event project to life.
      - generic [ref=e198]:
        - button "Caterers Caterers" [ref=e199]:
          - img "Caterers" [ref=e200]
          - generic [ref=e202]: Caterers
        - button "Decorators Decorators" [ref=e203]:
          - img "Decorators" [ref=e204]
          - generic [ref=e206]: Decorators
        - button "Photographers Photographers" [ref=e207]:
          - img "Photographers" [ref=e208]
          - generic [ref=e210]: Photographers
        - button "Entertainment Entertainment" [ref=e211]:
          - img "Entertainment" [ref=e212]
          - generic [ref=e214]: Entertainment
      - generic [ref=e215]:
        - button "Previous" [ref=e216]
        - button "Next" [ref=e217]
    - generic [ref=e219]:
      - generic [ref=e220]:
        - generic [ref=e221]:
          - heading "Grow Your Business with Venuze" [level=2] [ref=e222]
          - paragraph [ref=e223]: Showcase your services to thousands of event organizers and creators searching for talent like yours.
        - generic [ref=e224]:
          - button "Join as a Vendor" [ref=e225]
          - img "arrow" [ref=e226]
      - img "CTA image"
    - generic [ref=e227]:
      - generic [ref=e228]:
        - heading "Your Path to the Perfect Venue" [level=2] [ref=e229]
        - paragraph [ref=e230]: Planning an event, production, or gathering shouldn't feel complicated. Our streamlined process connects you with the right venues and trusted professionals, taking the stress out of logistics so you can focus on what matters most making it a success.
      - generic [ref=e231]:
        - generic [ref=e232]:
          - generic [ref=e233]:
            - img "Guests celebrating" [ref=e234]
            - img "Wedding decor" [ref=e235]
          - generic [ref=e236]:
            - img "Event photographer at work" [ref=e237]
            - img "Couple celebrating" [ref=e238]
        - generic [ref=e240]:
          - generic [ref=e243]:
            - generic [ref=e244]: "1"
            - generic [ref=e246]:
              - heading "Search & filter" [level=3] [ref=e247]
              - paragraph [ref=e248]: Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.
          - generic [ref=e251]:
            - generic [ref=e252]: "2"
            - generic [ref=e254]:
              - heading "Compare & message" [level=3] [ref=e255]
              - paragraph [ref=e256]: Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.
          - generic [ref=e258]:
            - generic [ref=e259]: "3"
            - generic [ref=e261]:
              - heading "Book & add services" [level=3] [ref=e262]
              - paragraph [ref=e263]: Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.
    - generic [ref=e264]:
      - generic [ref=e265]:
        - heading "Trusted by Event Creators Who Demand Excellence" [level=2] [ref=e266]
        - paragraph [ref=e267]: Join thousands of planners and hosts who love our seamless discovery and booking experience.
      - generic [ref=e268]:
        - generic [ref=e269]:
          - paragraph [ref=e270]: 1,500+
          - paragraph [ref=e271]: Venues Vetted & Approved
        - generic [ref=e272]:
          - paragraph [ref=e273]: 7,500+
          - paragraph [ref=e274]: Events Successfully Hosted
        - generic [ref=e275]:
          - paragraph [ref=e276]: 35+
          - paragraph [ref=e277]: Cities Across the Region
        - generic [ref=e278]:
          - paragraph [ref=e279]: 4.9★
          - paragraph [ref=e280]: Average Host Rating
      - generic [ref=e281]:
        - generic [ref=e282]:
          - img "Michael Carter" [ref=e284]
          - generic [ref=e285]:
            - paragraph [ref=e286]: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            - generic [ref=e287]:
              - paragraph [ref=e288]: Michael Carter
              - img "5 stars" [ref=e289]
        - generic [ref=e290]:
          - img "by Ayesha M." [ref=e292]
          - generic [ref=e293]:
            - paragraph [ref=e294]: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            - generic [ref=e295]:
              - paragraph [ref=e296]: by Ayesha M.
              - img "5 stars" [ref=e297]
    - generic [ref=e298]:
      - generic [ref=e299]:
        - heading "Discover Exceptional Destinations Across the Region" [level=2] [ref=e300]
        - paragraph [ref=e301]: From cosmopolitan cityscapes to cultural treasures, explore where celebrations come alive with local flavor.
      - generic [ref=e302]:
        - generic [ref=e303]:
          - img "New York, USA" [ref=e304]
          - generic [ref=e306]: 24 Venues
          - generic [ref=e307]:
            - heading "New York, USA" [level=3] [ref=e308]
            - generic [ref=e309]:
              - paragraph [ref=e310]: Coastal energy, modern Venue
              - generic [ref=e311]:
                - generic [ref=e312]: "Popular: Rooftop"
                - generic [ref=e313]: From $50 per hour
        - generic [ref=e314]:
          - img "London, UK" [ref=e315]
          - generic [ref=e317]: 108 Venues
          - generic [ref=e318]:
            - heading "London, UK" [level=3] [ref=e319]
            - generic [ref=e320]:
              - paragraph [ref=e321]: Coastal energy, modern Venue
              - generic [ref=e322]:
                - generic [ref=e323]: "Popular: Rooftop"
                - generic [ref=e324]: From $25 per hour
        - generic [ref=e325]:
          - img "Dubai, UAE" [ref=e326]
          - generic [ref=e328]: 17 Venues
          - generic [ref=e329]:
            - heading "Dubai, UAE" [level=3] [ref=e330]
            - generic [ref=e331]:
              - paragraph [ref=e332]: Coastal energy, modern Venue
              - generic [ref=e333]:
                - generic [ref=e334]: "Popular: Rooftop"
                - generic [ref=e335]: From $50 per hour
    - generic [ref=e337]:
      - generic [ref=e338]:
        - generic [ref=e339]:
          - heading "Turn Your Venue into a Destination" [level=2] [ref=e340]
          - paragraph [ref=e341]: List your space on Venuze and unlock new revenue opportunities. Reach clients looking for venues just like yours.
        - generic [ref=e342]:
          - button "List Your Venue" [ref=e343]
          - img "Arrow" [ref=e344]
      - img "CTA image"
  - contentinfo [ref=e345]:
    - generic [ref=e346]:
      - generic [ref=e347]:
        - generic [ref=e348]:
          - img "Venuze" [ref=e349]
          - paragraph [ref=e350]: Make it memorable—book the perfect venue and the pros who make it shine.
        - generic [ref=e351]:
          - generic [ref=e352]:
            - heading "Venuze" [level=4] [ref=e353]
            - list [ref=e354]:
              - listitem [ref=e355]: About
              - listitem [ref=e356]: News
              - listitem [ref=e357]: Careers
              - listitem [ref=e358]: Investors
          - generic [ref=e359]:
            - heading "Support" [level=4] [ref=e360]
            - list [ref=e361]:
              - listitem [ref=e362]: Listings your venue
              - listitem [ref=e363]: Listing your service
              - listitem [ref=e364]: Help center
              - listitem [ref=e365]: FAQ
          - generic [ref=e366]:
            - heading "Explore" [level=4] [ref=e367]
            - list [ref=e368]:
              - listitem [ref=e369]: Venue types
              - listitem [ref=e370]: Venue features
              - listitem [ref=e371]: Service options
              - listitem [ref=e372]: Locations
          - generic [ref=e373]:
            - heading "Legal & Privacy" [level=4] [ref=e374]
            - list [ref=e375]:
              - listitem [ref=e376]: Terms of service
              - listitem [ref=e377]: Payment & refund policy
              - listitem [ref=e378]: Host agreement
              - listitem [ref=e379]: Vendor agreement
      - generic [ref=e380]:
        - heading "Get in Touch" [level=4] [ref=e381]
        - textbox "Email Address" [ref=e382]
        - textbox "Message" [ref=e383]
        - button "Send" [ref=e384]
    - separator [ref=e385]
    - generic [ref=e386]:
      - generic [ref=e387]:
        - img "Twitter" [ref=e388]
        - img "Facebook" [ref=e389]
        - img "Instagram" [ref=e390]
      - paragraph [ref=e391]: © 2026 Venuze. All rights reserved.
  - region "Notifications alt+T"
  - alert [ref=e392]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Landing page", () => {
  4  |   test("renders the hero heading and search fields", async ({ page }) => {
  5  |     await page.goto("/");
  6  |     await expect(
  7  |       page.getByRole("heading", { name: /celebrate in venues big and small/i })
  8  |     ).toBeVisible();
> 9  |     await expect(page.getByText("Where")).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  10 |     await expect(page.getByText("When")).toBeVisible();
  11 |     await expect(page.getByText("Guests")).toBeVisible();
  12 |   });
  13 | 
  14 |   test("redirects to the search page with query params on search", async ({ page }) => {
  15 |     await page.goto("/");
  16 |     await page.getByRole("button", { name: /^search$/i }).click();
  17 |     await expect(page).toHaveURL(/\/search\?.*where=/);
  18 |   });
  19 | 
  20 |   test("shows the featured venues section with a working filter toggle", async ({ page }) => {
  21 |     await page.goto("/");
  22 |     await expect(page.getByRole("heading", { name: /featured venues/i })).toBeVisible();
  23 |     const galleryFilter = page.getByRole("button", { name: /^gallery$/i }).first();
  24 |     await galleryFilter.click();
  25 |     await expect(galleryFilter).toHaveClass(/bg-\[#ff5037\]/);
  26 |   });
  27 | });
  28 | 
```