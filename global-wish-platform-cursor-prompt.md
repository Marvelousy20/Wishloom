# Cursor Prompt: Build a Beautiful, Animated Global Wish-Fulfilment Platform

You are a senior product designer, creative director, and senior
frontend engineer working on a new global wish-fulfilment platform.

Your task is to design and implement a beautiful, production-quality
frontend that makes it easy for anyone in the world to post a wish and
for strangers to discover and anonymously fulfil it.

This is NOT a crowdfunding platform, a donation-request website, or a
charity application portal.

The central idea is simple:

**People post wishes. Other people make them come true.**

Someone might wish for a laptop to pursue a career, a camera to explore
photography, books for their studies, a musical instrument, art
supplies, or something meaningful for a special occasion. Another
person, anywhere in the world, can discover that wish and decide to
fulfil it.

The experience must preserve dignity. Users should not have to beg,
compete over who has the saddest story, or publicly prove that they
deserve kindness.

The platform should feel joyful, human, trustworthy, modern, and
international.

## 1. Start by understanding the existing project

Before changing any code:

-   Inspect the existing repository, framework, package manager, routes,
    installed dependencies, reusable components, styling system, and
    current implementation.
-   Identify the application's entry points and existing design
    conventions.
-   Reuse the current stack and existing dependencies wherever sensible.
-   If the project already has a working application, build on top of it
    rather than creating a separate application.
-   Do not replace working functionality unnecessarily.
-   Do not change the architecture just to accommodate your personal
    preferences.
-   If this is a fresh project, establish a clean, maintainable frontend
    structure using the framework already configured or, if none exists,
    Next.js App Router, TypeScript, and Tailwind CSS.
-   Use Lucide icons if an icon library is already installed. Otherwise,
    choose a lightweight compatible solution.
-   If Framer Motion or Motion is already available, use it. If not,
    determine whether adding Motion is worthwhile before installing
    another dependency.

After inspecting the codebase, implement the actual interface. Do not
stop at an audit, a plan, or a list of recommendations.

## 2. Product identity and design direction

Create a recognisable visual identity that feels like a modern global
gifting movement.

The site should look as though a talented design team spent real time
developing its visual language. Avoid the generic appearance of
AI-generated landing pages, cookie-cutter SaaS templates, and ordinary
crowdfunding platforms.

### Colour palette

Use these specific colours as the foundation of the design system:

-   Electric violet: `#6C3BFF`
-   Deep violet: `#4B20C9`
-   Vivid coral: `#FF6B6B`
-   Warm sunshine yellow: `#FFD166`
-   Fresh mint: `#8CE6C1`
-   Warm cream: `#FFF9F0`
-   Pure white: `#FFFFFF`
-   Midnight navy: `#17152B`
-   Muted text: `#716D80`
-   Subtle border: `#EAE4F0`

Use warm cream as the primary page background, midnight navy for primary
text, electric violet for the main brand and key actions, and coral and
sunshine yellow for accents.

Mint should communicate positive outcomes, such as fulfilled wishes and
success states.

Do not use every colour everywhere. Build a coherent palette with
deliberate contrast and a clear hierarchy.

The overall impression should be colourful and energetic, but still
sophisticated and premium.

### Colour usage

-   Primary buttons: electric violet with white text.
-   Primary button hover: deeper violet, with a subtle lift and shadow.
-   Secondary buttons: white or warm cream with a violet border or dark
    text.
-   Highlighted words and decorative illustrations: coral, yellow, mint,
    and violet.
-   Navigation: clean, mostly neutral, with restrained brand accents.
-   Wish cards: primarily white with subtle borders, soft shadows, and
    occasional colourful category accents.
-   Hero section: warm cream with a distinctive violet/coral visual
    composition.
-   Success states: mint accents with clear text labels, not colour
    alone.

Maintain accessible text contrast, especially on coloured buttons and
small text.

### Typography

Use a confident, contemporary type system.

Preferred options: - Headings: Manrope, Plus Jakarta Sans, or an already
installed equivalent. - Body text: Inter or an already installed
equivalent.

Use expressive, bold headings, clear body text, and comfortable line
heights.

Large headings should feel editorial and intentional, with selected
words highlighted in violet or coral. Avoid excessive uppercase text and
oversized text that compromises mobile layouts.

## 3. Visual quality and animation philosophy

I want this website to feel alive.

Use expressive, high-quality animation throughout the experience,
including scroll reveals, delightful hover states, staggered wish-card
entrances, subtle floating decorations, smooth transitions, and
satisfying interactions.

However, "crazy animations" means creative, impressive, and memorable
--- not chaotic or distracting.

Animations should make the experience feel more premium, not less
usable.

Use Motion/Framer Motion if available.

Implement the following where appropriate:

-   Smooth staggered entrance animations for hero content and wish
    cards.
-   Gentle floating motion for decorative stars, sparkles, gift
    illustrations, and other visual elements.
-   Animated gradient or colourful shape transitions in the hero
    section.
-   Scroll-triggered reveal animations for major sections.
-   Staggered card entrances as wish cards enter the viewport.
-   Small, satisfying button interactions with spring-based movement.
-   Subtle card elevation and image scaling on hover.
-   Animated navigation or active-state indicators.
-   A playful transition when a wish is successfully fulfilled.
-   An animated heart, sparkle, or gift interaction where it makes
    sense.
-   Smooth modal, drawer, and dropdown transitions.
-   Animated counters only when the displayed numbers represent real,
    available data.
-   Carefully designed loading skeletons and empty states.
-   A delightful success animation after submitting a wish.

Use purposeful easing and spring physics. Create a cohesive motion
system instead of assigning unrelated animations to every component.

Avoid excessive parallax, constant movement behind text, huge bouncing
elements, unnecessary page transitions, or animations that make
navigation feel slow.

Respect `prefers-reduced-motion`. Provide a reduced-motion experience
that removes nonessential movement.

Ensure animations remain smooth on ordinary mobile devices.

## 4. Build the main homepage

Create a compelling homepage that immediately explains the idea and
invites visitors to participate.

### A. Navigation

Build a clean, polished navigation bar.

Include: - Brand logo and wordmark. - Discover Wishes. - How It Works. -
A prominent "Make a Wish" action. - Sign In. - A primary "Give a Gift"
or equivalent discovery-oriented CTA.

Use a compact desktop layout with appropriate spacing.

On mobile, use a well-designed responsive navigation menu. Keep the main
action easy to find.

The navigation can become sticky after scrolling if this improves
usability. Add a subtle background or blur treatment only where it
helps.

The brand name is not yet final. Use a single easy-to-change
placeholder, such as "Kindred", and keep the wordmark implementation
isolated so it can be renamed easily. Do not claim that the name is
legally available.

### B. Hero section

This is the most important visual section.

Create an outstanding hero with a clear headline, concise supporting
copy, two strong calls to action, and a distinctive visual composition.

Suggested copy:

Eyebrow: "A LITTLE KINDNESS GOES A LONG WAY"

Headline: "Someone out there could make your wish come true."

Highlight "make your wish come true" using electric violet, coral, or a
deliberate combination.

Supporting text: "A place where wishes meet kind strangers. Share
something you've been hoping for, discover someone else's wish, or be
the reason someone's day changes."

Primary CTA: "Make a Wish"

Secondary CTA: "Discover Wishes"

Include a small reassurance beneath the buttons: "No begging. No
pressure. Just people making good things happen."

### Hero artwork

Do not make the hero a plain text column beside a generic stock photo.

Create an art-directed visual composition that feels unique to the
brand.

Use a combination of: - Layered wish cards. - Gift boxes, ribbons,
stars, and abstract shapes. - Carefully composed photographs of
meaningful objects. - Floating decorative elements in the brand
palette. - Soft gradients and dimensional shadows. - One or two
overlapping cards showing sample wishes.

Example sample cards: - "A camera to start my photography journey." -
"Books for my first year at university." - "A guitar I've wanted to
learn to play."

These are illustrative examples, not verified real users.

Use image assets that are genuinely relevant to the content. If
image-generation or existing image tools are available, create or source
cohesive imagery rather than filling the interface with random stock
photography.

Use `next/image` or the project's equivalent where appropriate.

The artwork should be visually rich without obscuring the headline or
CTA. Use a responsive composition that reflows cleanly on smaller
screens.

### C. Social proof and impact strip

Create a slim, visually interesting strip beneath the hero.

Potential messages: - "Kindness has no borders." - "Every wish starts
with a little hope." - "Anyone can give. Anyone can wish."

Do not invent user counts, fulfilment statistics, testimonials, ratings,
or claims about existing activity.

If the platform has no real data yet, use values-free messaging rather
than fabricated social proof.

### D. Discover wishes section

Create a prominent wish-discovery section with a heading such as:

"Your next little act of kindness"

Supporting text: "Browse wishes from around the world. You never know
whose day you might change."

Include: - Search input. - Category filters. - Location or country
filter where appropriate. - Budget filter if meaningful. - A responsive
grid of visually polished wish cards. - A "View all wishes" action.

Use a few illustrative sample wishes to demonstrate the experience.

Suggested categories: - Education - Technology - Creativity - Books -
Music - Everyday essentials - Experiences - Special moments - Other

Make the category filters functional against the available local/sample
data.

If search is implemented, it must actually filter the visible wishes.
Avoid decorative controls that do nothing.

### E. Wish cards

Wish cards are a core product component. Invest in their design.

Each card should include: - A relevant image or attractive visual
treatment. - Wish title. - A short, respectful description. - The
person's first name or display name, if provided. - Country or broad
location, only where appropriate and safe to disclose. - Estimated item
cost or price range, when available. - Category. - Clear status
indicating whether the wish is still available or fulfilled. - A "View
Wish" action. - A clear route toward fulfilling the wish.

Cards should feel warm and personal, not like ecommerce product listings
or charity case files.

Vary compositions slightly through imagery and category accents, but
maintain consistent spacing, typography, and interaction patterns.

Use subtle hover effects: a slight lift, gentle image zoom, and an
understated accent transition.

Do not require users to expose sensitive personal details to make a wish
visible.

### F. How it works

Create a visually engaging three-step section.

Step 1 --- Make a wish. "Share something you'd genuinely love to
receive. Keep it simple."

Step 2 --- Discover a wish. "Explore wishes from people around the world
and find one you'd love to fulfil."

Step 3 --- Make it happen. "Help someone receive their wish through a
secure, straightforward process."

Use distinctive illustrations or simple custom icon compositions.
Connect the steps with a tasteful visual element or animated path on
desktop.

On mobile, stack the steps with clear spacing.

Make it clear that wish fulfilment depends on someone choosing to help;
do not imply that every wish is guaranteed to be fulfilled.

### G. A section that celebrates giving

Create a visually expressive section encouraging people to fulfil a
wish.

Suggested heading: "You don't have to change the world. Just someone's
world."

Supporting copy: "One thoughtful gift can make a real difference in
someone's day. Find a wish that speaks to you and help make it happen."

CTA: "Find a Wish to Fulfil"

Use the coral, yellow, violet, and mint palette in a restrained but
memorable composition.

### H. Closing CTA

Create a distinctive closing section before the footer.

Headline: "What if your next good day started with someone else's?"

Provide two actions: - "Make a Wish" - "Discover Wishes"

Make the section visually memorable, with a strong background treatment
and carefully controlled decoration.

### I. Footer

Include: - Brand logo and short description. - Discover Wishes. - Make a
Wish. - How It Works. - About. - Trust & Safety. - Privacy. - Terms. -
Contact.

Use real routes where they exist. If a page is not implemented, provide
a sensible placeholder route or mark it as future functionality without
pretending it is complete.

Include a simple, warm closing line, such as: "Made for the moments when
people show up for people."

## 5. Build the core application pages

Do not limit the work to a marketing homepage. Build the essential
user-facing pages and establish a consistent design system across them.

### A. Discover Wishes page

Route suggestion: `/wishes`

Include: - Page heading and supporting copy. - Search. - Category
filters. - Country filter, where suitable. - Sort options. - Responsive
wish-card grid. - Loading, empty, and error states. - Pagination or a
"Load more" pattern if the data grows.

Make the controls functional with the available data.

### B. Individual wish details page

Route suggestion: `/wishes/[id]`

Include: - Main wish image. - Wish title and full description. -
Category and estimated price. - Public display name and safe location
information. - A prominent "Fulfil This Wish" CTA. - Clear information
about how fulfilment works. - A way to report a suspicious or
inappropriate wish. - A status display if the wish has already been
fulfilled.

Do not expose home addresses, private contact details, precise
locations, or other sensitive information publicly.

If the actual fulfilment flow is not connected to a backend, clearly
treat it as a frontend prototype rather than pretending a purchase has
been completed.

### C. Make a Wish page

Route suggestion: `/make-a-wish`

Create a friendly, low-friction form.

Fields: - Wish title. - Description: what the person would like and why
it matters to them, without requiring a hardship narrative. -
Category. - Link to a specific item, if available. - Estimated price and
currency, where relevant. - Country. - Optional image. - Display name. -
Privacy preferences and consent.

Keep the form short and welcoming. Use progressive disclosure only if
necessary.

Include: - Clear labels and helpful placeholders. - Inline validation. -
Character limits where appropriate. - Image preview and file validation
if uploads are implemented. - A clear explanation of what will be
public. - A review step or preview before publishing. - A polished
success state.

Do not collect bank details or unnecessary personal information through
this form.

Never imply that a wish is published, verified, or approved unless the
implementation actually performs that action.

### D. Fulfil a Wish flow

Route suggestion: `/wishes/[id]/fulfil`

Design a simple, trustworthy flow that explains how a giver can help.

Prioritise direct purchase from an appropriate retailer or a secure
purchase-coordination model over unrestricted cash transfers.

Include: - A summary of the wish. - Estimated cost and currency. - Clear
fulfilment options where supported. - A giver anonymity preference. - A
transparent explanation of any fees, shipping, and delivery
responsibilities when applicable. - A clear confirmation step.

Do not collect payment information directly in frontend code.

Do not build a fake checkout or claim a transaction succeeded without an
actual payment integration and verified response.

If no backend or payment provider is configured, build a clearly
labelled demo flow with sensible interaction states and an explicit
boundary between prototype behaviour and real fulfilment.

### E. Authentication

If authentication already exists, integrate with it.

If not, design polished sign-in and sign-up screens that can be
connected to a real authentication provider later.

Keep the interface simple: - Email. - Password or a supported
passwordless option. - Clear validation. - Loading and error states. - A
welcoming post-sign-in experience.

Do not invent a working authentication system using local state alone.

### F. User dashboard

Route suggestion: `/dashboard`

Include: - My Wishes. - Fulfilled Wishes. - Wishes I've Helped Fulfil,
if the underlying data supports it. - Account settings. - Privacy
preferences. - Wish status indicators.

Keep the dashboard lightweight and human. It should not look like a
corporate admin panel.

Include well-designed empty states for a new user.

### G. Trust and Safety page

Route suggestion: `/trust-and-safety`

Explain the platform's principles in plain language: - Respectful
participation. - Wish review and moderation. - Reporting inappropriate
or suspicious wishes. - Protecting personal information. - Giver
anonymity where supported. - Transparent fulfilment arrangements.

Do not claim that verification, moderation, fraud detection, or payment
protections exist unless those mechanisms have actually been
implemented.

## 6. Interaction design

Every visible interactive element must have a clear purpose.

Implement: - Working navigation. - Functional search and filters. -
Working form validation. - Buttons that navigate or perform the stated
action. - Functional modals and drawers. - Clear focus states. - Useful
loading, error, empty, and success states. - Keyboard-accessible
interactions. - Responsive mobile navigation. - Consistent hover,
active, disabled, and focus states.

Use reusable components for buttons, cards, badges, inputs, form fields,
dialogs, dropdowns, and section layouts.

Avoid placeholder buttons that appear functional but do nothing.

If an action requires a backend that does not exist, provide a clear
demo state or leave the action explicitly unavailable rather than faking
success.

## 7. Responsive design

Design mobile-first, then refine tablet and desktop layouts.

Support: - Small mobile devices. - Standard smartphones. - Tablets. -
Laptops. - Large desktop displays.

On mobile: - The headline must wrap naturally. - CTAs must remain easy
to tap. - Navigation must work without horizontal overflow. - Wish cards
should use a sensible one-column or compact grid layout. - Filters
should collapse into a drawer or horizontally scrollable control where
appropriate. - Forms should be easy to complete with a mobile
keyboard. - Decorative artwork must not overlap essential content. -
Motion must remain performant.

Test the actual implementation at several viewport sizes.

## 8. Accessibility

Treat accessibility as a core product requirement.

Implement: - Semantic HTML. - Proper heading hierarchy. - Accessible
names for controls. - Labels and instructions for form inputs. -
Keyboard navigation. - Visible focus indicators. - Accessible modal
behaviour. - Sufficient contrast. - Reduced-motion support. -
Alternative text for meaningful images. - Empty alt text for purely
decorative imagery. - Status communication that does not depend on
colour alone.

Do not sacrifice usability for visual effects.

## 9. Performance and technical quality

The website should look visually impressive without becoming slow.

Requirements: - Avoid unnecessary dependencies. - Use optimized image
loading and sensible image sizes. - Lazy-load below-the-fold imagery. -
Avoid large video backgrounds unless there is a strong reason. - Use
animation transforms and opacity wherever possible. - Avoid expensive
layout-changing animations. - Avoid excessive client-side rendering. -
Keep components maintainable and appropriately separated. - Reuse the
project's existing design system. - Avoid giant components containing
the entire application. - Keep TypeScript types meaningful. - Validate
form inputs. - Handle missing or malformed data safely. - Run the
project's lint, type-check, and available tests. - Fix errors introduced
by your changes.

Use realistic sample data in a dedicated fixture or mock-data file
rather than scattering hardcoded content across components.

If the project has an existing backend, use its actual data contracts.
Otherwise, keep data access behind a clean abstraction so a real API can
be introduced without rewriting the UI.

Do not expose API secrets or payment-provider secret keys in client
code.

## 10. Brand and design details that make it feel premium

Pay special attention to the details that distinguish a polished product
from a generic template.

-   Consistent border radii.
-   Intentional spacing and alignment.
-   Carefully balanced text widths.
-   Beautiful image crops.
-   Subtle but purposeful shadows.
-   Strong visual hierarchy.
-   Tasteful gradients.
-   Distinctive illustrations and decorative elements.
-   Consistent animation timing.
-   Well-designed empty states.
-   High-quality form interactions.
-   Elegant mobile layouts.
-   Cohesive transitions between sections.

Avoid: - Excessive glassmorphism. - Purple gradients on every section. -
Repeated identical cards without visual variation. - Random emoji used
as the main illustration system. - Excessive pill-shaped containers. -
Too many floating decorative shapes. - Fake social proof. - Fake user
statistics. - Fake verification badges. - Fake payment success
screens. - Unnecessary dashboard charts. - Generic "AI startup"
layouts. - Animations that make the interface tiring to use.

The site should feel joyful and expressive while remaining credible
enough that a person would trust it with a meaningful wish.

## 11. Implementation approach

Work in this order:

1.  Inspect the existing codebase.
2.  Identify the routes, stack, and reusable components.
3.  Establish the colour tokens, typography, spacing, shadows, radii,
    and motion conventions.
4.  Implement the homepage and hero first, with the strongest visual
    treatment.
5.  Build reusable wish cards and the discovery experience.
6.  Implement the individual wish page and make-a-wish form.
7.  Add the fulfilment flow, authentication screens, dashboard, and
    trust page as supported by the existing architecture.
8.  Add animations and responsive refinements.
9.  Verify interactions and accessibility.
10. Run linting, type checking, and available tests.
11. Fix any errors caused by the implementation.

Do not stop after producing the hero section or a static visual mockup.
Implement the actual pages, components, responsive layouts, and
interactions described above.

Do not rewrite the entire application without first understanding what
is already there.

When finished, provide a concise summary of: - What you implemented. -
Which routes are available. - Which interactions work. - Which features
still require a backend or external service. - Any tests or checks you
ran and their results.

## Final creative direction

The finished experience should communicate one feeling:

**There are good people in the world, and this is a place where they can
find each other.**

Make it visually memorable, colourful, warm, emotionally engaging,
globally inclusive, and technically polished.

Prioritise a genuinely distinctive design over adding unnecessary
features. I would rather have a few exceptional screens than many
mediocre ones.
