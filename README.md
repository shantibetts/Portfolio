# Portfolio Project

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day       | Deliverable                                  | Status          |
| --------- | -------------------------------------------- | --------------- |
| Sat/Sun   | Project Description                          | Complete        |
| Sun/Mon   | Wireframes / Priority Matrix / Timeline      | Complete        |
| Wednesday | Core Application Structure (HTML, CSS, etc.) | Awaiting Review |
| Thursday  | MVP & Bug Fixes                              | Incomplete      |
| Friday    | Final Touches                                | Incomplete      |
| Friday    | Present                                      | Incomplete      |

## Project Description

### Design:

I want my website to create the feeling of looking out a rainy window into an overcast day. I'm going to try to create this using:

- A macro image of water droplets on glass, with tones in the grey / blue range to either:

  1.  Use it as a static background with content on top that has semi-transparent backgrounds of blue/grey
  1.  Use a background color of blue/grey and give each piece of content a copy of the semi-tranpsarent image

- Transparency and subtle animation to make it feel like the content is on glass slides that are _sliding_ on mouseover

- A soft theme that doesn't take away from the content

### Inspirations:

[Virginia Orosa](https://www.virginiaorosa.com/) does a really nice design using simple colors and shapes. I would like to do something similar but with

- widely rounded corners
- shadows + gaps to make it seem like the content is hovering slightly above the background
- I really like her skills list (using icons, having it scroll) I would like to implement something like this as a stretch goal

[Milli design agency](https://www.milli.agency/) I really love the dynamic motion of the navigation frames, with the brand in the middle. However, it breaks down on mobile, so I think I will omit it. Maybe as a stretch-stretch goal I will impliment something like this for my desktop version.

[Dr Gerogiou](https://www.orestisgeorgiou.com/) I really like the large, professional, high-quality pictures of him looking like he's having fun. I'm hoping to work in back-end, so I dont think I need this level of personal representation in my portfolio, but I felt like it was really well done. One problem is that his content stays stubbornly in 2 columns no matter how small the screen gets. I don't know that I can replicate, but I really like the landing on his home page - navigation bar along the top, picture filling the screen, plus large name along the bottom, that becomes the H1 as you scroll down.

[Kristen Lee](https://www.kristenleecalligraphy.com/services) does a really nice job with large picture examples of her work with lots of white space. Flexbox for aligning content plus a grid that shrinks from 2 columns to 1 for mobile is a must.

## Wireframes

[See wireframes PDF](https://drive.google.com/file/d/1ITKI6UD9q0miLgLvHXOe7XTP14xOMoAP/view?usp=sharing)

## Time/Priority Matrix

[See Time/Priority Matrix](https://drive.google.com/file/d/19NVF9wNiMfTp7ZFXD8Xe5JUZJzQaKnLh/view?usp=sharing)

### MVP

- HTML Backbone
- Basic CSS
- Header
- Intro section
- Portfolio section
- Footer
- Nav bar

#### PostMVP

- Skills section
- Contact section
- Animations
- Background IMG
- Slide animation
- Nav Animation
- Logo Creation

## Functional Components

Over all design: on Mobile, body has a 2 column grid with 6 sections:

| Column 1 | Column 2 |
| -------- | -------- |
| Header   | Header   |
| Nav      | Intro    |
| Nav      | Projects |
| Nav      | Contact  |
| Nav      | Skills   |
| Footer   | Footer   |

With Column 1 hiden until the hamburger menu is clicked. When the nav menu is open, the hamburger changes to an X

On Desktop, the grid will change to:

| Column 1 | Column 2 | Column 3 | Column 4 |
| -------- | -------- | -------- | -------- |
| Header   | Header   | Header   | Header   |
| Nav      | Intro    | Intro    | Skills   |
| Nav      | Projects | Projects | Projects |
| Nav      | Contact  | Contact  | Contact  |
| Footer   | Footer   | Footer   | Footer   |

Inside this, Projects will have a grid layout with 2 columns to populate the actual projects inside. Column 1 will maintain it's functionality from mobile.

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Basic HTML / CSS        |    5     |      2hr       |     1hr     |
| Header/Footer/Nav/Intro |    4     |      4hr       |     1hr     |
| Grid                    |    4     |      3hr       |     1hr     |
| Portfolio               |    3     |      6hr       |     1hr     |
| Nav Bar Hide/Show       |    3     |      4hr       |    0.5hr    |
| Social Media Icons      |    2     |      1hrs      |    0.5hr    |
| ++Dynamic styling       |    3     | not estimated  |    2hrs     |
| Total                   |          |     20hrs      |    7 hrs    |

#### PostMVP

| Component                    | Priority | Estimated Time | Actual Time |
| ---------------------------- | :------: | :------------: | :---------: |
| Skills Section               |    0     |      3hr       |   2.5hrs    |
| Contact Form                 |   2.5    |      1hr       |     1hr     |
| Background image API         |    1     |      2hr       |   ~0.5hr    |
| Nav Animation                |    2     |      2hr       |    0.5hr    |
| Animations                   |    0     |      4hr       |     hr      |
| Make own icon                |    2     |      4hr       |     hr      |
| ++Chose background img       |    4     |      2hr       |     2hr     |
| ++Reformat for design change |    6     |      2hr       |     3hr     |
| Total                        |          |     16hrs      |     hrs     |

## Additional Libraries

CSS Reset: Remove all default formatting from HTML
jQuerry: Change the HTML to animate and for NAV functionality
Ajax: fetch a background image

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

1. footer icons appear to have a margin below them that biases them up. It seems to be relative to the width of the viewport, but I can't figure out what element it's comming from. Noting and moving on.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
