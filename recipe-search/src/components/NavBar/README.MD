# Features

- Responsive on smaller screens

- Dynamically engineered to be future proof, all the data for the navbar is mapped from an object. This can encourage reusability if I need the data elsewhere in another react component.

## Challenges faced during the development of responsive navbar

- The biggest challenge was creating a dropdown menu on smaller screens with a hamburger icon to give a responsive look and feel.

- I achieved this creating two containers for the dropdown, with the outer container set with a height of 0 programmatically with useEffect, useState, and good old getBoundingClientRect (which served to get the height of all the link elements), and the inner container containing all the links.

- Whenever a user would click on the hamburger icon, I would set the state of showLinks. If showLinks is true, I would get the height of the container with all the links and assign that to its parent container. If showLinks is false, this would manually set the parent container's height to be 0. If you do some digging into my CSS spaghetti code, you might realize why I needed this `height: auto !important` in the media query.

- Good CSS code is easily maintainable and modular, but in this case I needed the `!important` rule. I was applying an inline style of `height: 0` to the parent container in my useEffect logic, so whenever the website would go to a bigger screen from a smaller screen, the container would disappear because the height of the in-line style is 0. So whenever the screen would go over 800px wide, the `height: auto !important` attribute would take over the in-line style of `height: 0`.

- Then I ran into another issue, which was that the dropdown menu was causing all the content to push down, after a quick google search, I realized that `position: absolute` was the solution to fix this problem. I would apply this to the parent container containing the dropdown menu for the links and position it relative to the navbar. I also added `overflow: hidden` to the parent container to remove the visibility of it's inner container containing links.
