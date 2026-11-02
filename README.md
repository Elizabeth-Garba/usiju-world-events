# Usiju World Events — Digital Experience Concept

A responsive static landing page concept for Usiju World Events, an events and hospitality business in Jos, Plateau State, Nigeria. Prepared by Digital Presence Upgrade (DPU) to demonstrate a possible digital direction for the business.

The project uses the supplied identity and photographs with a proposed navy, champagne gold, warm ivory and charcoal palette. The page is a demonstration; verify business claims and secure founder and media approvals before public production use.

## Technology

- Semantic HTML5
- CSS3 (Grid, Flexbox, responsive media queries)
- Vanilla JavaScript
- Google Fonts: Cormorant Garamond and DM Sans
- Static hosting compatible with Netlify

There is no build step or JavaScript framework.

## Project structure

```text
.
├── assets/
│   ├── images/              # 13 supplied photographs
│   ├── logos/               # 2 supplied logo files
│   └── videos/              # 3 supplied MP4 files
├── content/
│   └── website-content.md   # Website copy and verification notes
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── .gitignore
└── README.md
```

## Run locally

Open the project folder in Visual Studio Code and open `index.html` in a browser. For a local HTTP preview, use a static preview extension such as Live Server, then open its local URL. No package installation is required.

## Page sections and features

The landing page includes a hero, introduction, services, facilities, event types, filtered photo gallery, video showcase, founder story, enquiry form and footer.

- Responsive navigation with a mobile menu.
- Anchor navigation, hover states and restrained reveal motion.
- Gallery category filters and keyboard-dismissable image lightbox.
- Three supplied videos with controls, poster images and `preload="none"`.
- Client-side required-field and email validation for the enquiry form. The form is not connected to an email service or backend and sends no data.
- Reduced-motion support, semantic sections, skip link and descriptive image alternatives.

## Asset inventory and handling

The 18 original files are listed in [content/website-content.md](content/website-content.md) and were retained in their supplied folders without renaming, deleting or overwriting them. The website references the names that exist on disk, including the videos' repeated `.mp4.mp4` suffix.

The photographs and logos contain JPEG data, although their names include an extra `.webp` segment. The files still end in `.jpg` or `.jpeg`, so the browser can display them as JPEG images. Three image filenames contain spelling errors: `usiju-brithday-event.webp.jpg`, `usiju-consert-event.webp.jpg`, and `usiju-corparate-event-02.webp.jpg`.

## Client review before production

- Verify the stated venue capacity of 2,000 guests, parking, air conditioning and round-the-clock power.
- Confirm facility availability and the service claims in the content document.
- Obtain founder approval for the provisional biography.
- Confirm the published business address, phone numbers, email, WhatsApp number and booking destination.
- Confirm testimonials, photography and video publication rights. The supplied gallery media is used here as provided; ownership and permission were not verified during development.
- Confirm any Google Maps and social links before adding them.

The enquiry form currently validates the entered values in the browser only. It does not retain or transmit visitor information. Add a verified email or WhatsApp destination, or connect an approved form service, before using it to receive bookings.

The 2,000 guest capacity and other unverified venue details are retained in the content document for review and are omitted from the page until confirmed.

## Preview deployment with Netlify

This is a static site and can be deployed without a build command:

1. Sign in to Netlify and create a new site using the manual deploy / drag-and-drop option.
2. Upload the project folder contents, including `index.html`, `css/`, `js/`, and `assets/`.
3. Use the free Netlify subdomain assigned to the site for the demonstration.
4. Check the deployed URL on desktop and mobile and verify that local image and video paths load.

No Netlify authentication or deployment has been performed from this workspace. There is no verified live URL yet.

## GitHub

The workspace was not a Git repository at the start of development. To initialise and commit locally:

```bash
git init
git add .
git commit -m "Build Usiju World Events landing page concept"
```

To connect GitHub later, create or select the intended repository first, then add its verified URL as `origin` and push the chosen branch. Do not overwrite an existing remote repository. No remote has been configured or pushed from this workspace.

## Media attribution and permissions

Images, logo files and videos were supplied with the project assets. Their source attribution and publication permissions were not included in the workspace. Confirm ownership and obtain permission from the relevant rights holders before public deployment.
