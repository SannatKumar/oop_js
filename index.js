


function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();


//Consructor Function
//Naming convention starts with capital letter inside constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('Draw from COnstructor');
    }
}