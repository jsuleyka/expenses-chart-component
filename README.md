# Frontend Mentor - Expenses chart component

![Design preview for the Expenses chart component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge. This challenge was created using HTML, CSS(Flexbox) and Vanilla JavaScript.

## The challenge

This challenge is to build out this bar chart component and get it looking as close to the design as possible.

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Chartjs

## What I learned

In this challenge, I learned to customize a bar chart of the Chartjs and get JSON data with Promise for the Vanilla JS.

```html
  <canvas id="myChart" style="width:340px;max-width:600px;height: 220px;"></canvas>>
```

```js
tooltips: {
  callbacks: {
    title: () => null,
    label: function (tooltipItems) {
      return '$' + tooltipItems.yLabel;
    }
  }
  ....

async function getJson() {
  const response = await fetch('data.json');
  const json = await response.json();
  ...
}

const backgroundColor = [];
  for (let i = 0; i < days.length; i++) {
    if (days[i] === dayNameVal) {
      backgroundColor.push(todayColor);
    }
    else{
      backgroundColor.push(dayColor);
    }    
  }
  ...
```

## Deploying 

My project deployed, you can find below:

- [GitHub Pages](https://jsuleyka.github.io/expenses-chart-component)

## My solution

I completed this challenge, however, if you consider a better way to build this challenge or I need to fix any bug in my code, Please feel free to provide feedbacks.

- [Github Repository](https://github.com/jsuleyka/expenses-chart-component)

## Author

- LinkedIn - [Suleyka Juarez](https://www.linkedin.com/in/suleyka-juarez-4812134a/)
- Frontend Mentor - [@jsuleyka](https://www.frontendmentor.io/profile/jsuleyka)
