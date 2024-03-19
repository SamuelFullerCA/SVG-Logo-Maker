const shapeFunction = require("./generateSVG");

describe('Square', () => {
    test('Generated Square SVG', () => {
      testSquare = {
        shape: 'square',
        shpColor: 'yellow'
      }
      const render = shapeFunction(testSquare);
    expect(render).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="35" width="150" height="150" fill="yellow"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    </svg>`);
    });
  });


  describe('Circle', () => {
    test('Generated Circle SVG', () => {
        testCircle = {
        shape: 'circle',
        shpColor: 'yellow'
      }
      const render = shapeFunction(testCircle);
    //   shape.setColor(color);
    expect(render).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="105" r="80" fill="yellow"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    </svg>`);
    });
  });

  describe('Triangle', () => {
    test('Generated Triangle SVG', () => {
        testTriangle = {
        shape: 'triangle',
        shpColor: 'yellow'
      }
      const render = shapeFunction(testTriangle);
    //   shape.setColor(color);
    expect(render).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 275,130 25,130" fill="yellow"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    </svg>`);
    });
  });