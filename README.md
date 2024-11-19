In this task, we will make a website that looks like [this](https://furends.netlify.app "this").
Here is a starting point [fork and clone this repo](https://github.com/JoinCODED/TASK-Fur-ends)

### Pet The Pet!

1. In `PetItem.js`, create a state for the pet image with an inital value of `pet.image`.
2. Pass it to the image's `src` tag.
3. Add an `onClick` to the button that changes the state from `"pet.image` to `"pet.image2"`
4. Test your code, the button should change the image to a gif!

### Search Bar

1. In `PetsList`, create a state called `query` and a method called `setQuery`.
2. In the input tag of `SearchBar` add an onChange method that calls `setQuery()` and gives it `event.target.value` as an argument.
3. At this point, whatever you type in your search bar should appear in the `query` state in `React Dev Tools`.
4. In your `PetsList`, filter your pets by comparing your pet's name with `query` using `includes` before you map your list so you can deal with plain javascript object.
5. At this point, our search bar is case sensitive. Fix it so that it becomes case insensitive.

### Filter Pets by specie

1. in `PetsList`, create a state called `type` and a method called `setType`.
2. In the select tag of `PetSelector` add an onChange method that calls `setType()` and gives it `event.target.value` as an argument.
3. At this point, whatever you select in your selector should appear in the `type` state in `React Dev Tools`.
4. In your `PetsList`, filter your pets by comparing your pet's type with `type` using `includes`.

### Challenge

1. Move all your search bar code to it's own component and pass setQuery as a prop to your new component.
2. Move all your selector code to it's own component and pass setType as a prop to your new component.
