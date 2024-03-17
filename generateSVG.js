//parents class of shape so I dont repeat name and fill
class shape {
    constructor(shapeName, colorFill){
        this.shapeName = shapeName;
        this.colorFill = colorFill
    }


}
//Class for square
class Square extends shape{
    constructor(shapeName, x, y , width, height, colorFill){
        super(shapeName, colorFill)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
    }
}

// Class for circle
class Circle extends shape{
    constructor(shapeName, cx, cy, r, colorFill){
        super(shapeName, colorFill)
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
}

//class for triangle
class Triangle extends shape{
    constructor(shapeName, points, colorFill){
        super(shapeName, colorFill);
        this.points = points;
    }
}

//function to create the shape paramaters based on what the user selected
function shapeFunction(data){
    if(data.shape === 'square'){
        const squareShape = new Square ('rect', 'x="75"', 'y="35"', 'width="150"', 'height="150"')
        return `${squareShape.shapeName} ${squareShape.x} ${squareShape.y} ${squareShape.width} ${squareShape.height} fill="${data.shpColor}"`
    }else if(data.shape === 'circle'){
        const circleShape = new Circle('circle', 'cx="150"', 'cy="105"','r="80"')
        return `${circleShape.shapeName} ${circleShape.cx} ${circleShape.cy} ${circleShape.r} fill="${data.shpColor}"`
    }else if(data.shape === 'triangle'){
        const triangleShape = new Triangle('polygon', 'points="150,15 275,130 25,130"')
        return `${triangleShape.shapeName} ${triangleShape.points} fill="${data.shpColor}"`
    }
}

//function to generate the SVG file using the users prompt input and shapeFunction
function generateSVG(data) {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${shapeFunction(data)}/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtColor}">${data.text}</text>

        </svg>
  `;
  }
  
  //exports the shape
  module.exports = generateSVG;
  