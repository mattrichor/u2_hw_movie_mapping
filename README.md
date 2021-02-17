# Movie DB

![movies](https://newsd.in/wp-content/uploads/2018/04/Telugu-Film-Industry-vs-AP-.jpg)

## Overview

We'll be building a simple movie application that renders movies and genres to practice mapping over components and passing data with props. You'll be creating 2 new components to accomplish this.

## Getting Started

- Fork and Clone
- `npm install`
- `npm start`
- Create a `components` folder inside of src


## Instructions
### Data
Within the data folder in `src` take a close look at the structure of the data in `movies.json`.
- What does this data look like?
- What sort of information can we get about each movie?

Import the data from `movies.json` into `App.js`.
```js
import movieArray from './data/movies.json'
```

### Components
Next we'll need to create 2 components in the `components` folder. One component will be for an individual movie, while the other will be for the genres of a movie.
- In your `Movie` component, set it up to accept data from props and render it with JSX
- What data can be taken from the array of data in `movies.json`?
- You'll need at least a title, release date, overview, and image for each movie
- Make sure to use proper `Class` component syntax
```js
 import React, { Component } from 'react'
 
 export default class Movie extends Component {
   render() {
     return (
       <div>
         // JSX for movie data from this.props here
       </div>
     )
   }
 }
```

Now we'll need to make a component for an individual `Genre` within the array of genres for each movie.
- Let's keep the JSX simple, since we'll only need to be taking in the name of the genre from props
- The important aspect of this component is _styling_, we want to know what each genre is at least by color
- In the JSX for rendering a genre name in the `Genre` component, we'll need to add in some conditional styling. A switch statement inside the render method may be useful here.
- After setting up a switch case to set a variable for colors associated with each genre name that could be coming in from props you'll need to apply it with _inline_ styling in the JSX
- To style inline, add a style prop on the tag you want to affect and open 2 curly brackets up. Styles are camelCased key value pairs with 'strings' for values. Example:
```js
render() {
  let myColorVariable;
  switch(this.props.genre) {
    case 'some genre': 
      myColorVariable = someColor.associated.with.a.specific.genre
      break
    default:
      myColorVariable = 'some cool color'
  }

  return (
    <div>
      // EXAMPLE of inline styling without a variable
      <p style={{ backgroundColor: 'darkslateblue', color: 'rgb(255,255,255)' }} >{this.genre}</p>

      // EXAMPLE of inline styling WITH a variable
      <p style={{backgroundColor: myColorVariable, color: '#000000'}} >{this.props.something}</p>
    </div>
  )
}



components folder
Movie.js component

## Homework Requirements/End Product/MVP

List homework requirements

- Requirement 1
- Requirement 2

## Bonus (If Needed)

List bonuses
- Bonus 1
- Bonus 2

## Submission Guidelines
- PR must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-1-25/template_pull_request)

## Resources
- [Lesson 1]()
- [Lesson 2]()
