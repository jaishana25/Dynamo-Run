const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');
canvas.width = innerWidth
canvas.height = innerHeight
const grd = context.createLinearGradient(0, 100, 200, 0)
grd.addColorStop(1,'purple')
grd.addColorStop(0,'pink')
const gravity = 0.5
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 30;
        this.height = 30;
    }

    draw(){
        context.fillStyle = grd;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y<= canvas.height){
            this.velocity.y += gravity
        }else{
            this.velocity.y = 0
        }
    }
}

const player = new Player()
const keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

function animate (){
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.right.pressed){
        player.velocity.x=5
    } else if (keys.left.pressed){
        player.velocity.x= -5
    }
       else player.velocity.x=0
}

animate()

addEventListener('keydown', (event) => {
    const keyCode = event.key.charCodeAt(0);
    // console.log(keyCode)
  
    switch(keyCode){
        case 97:
            console.log('left')
            keys.left.pressed=true
            break;

            case 115:
                console.log('down')
                break;
                case 116:
                    console.log('right')
                   keys.right.pressed=true
                    break;
                    case 119:
                        console.log('up')
                        player.velocity.y -= 10
                        break;

        
    }
    console.log(keys.right.pressed)
  });

  addEventListener('keyup', (event) => {
    const keyCode = event.key.charCodeAt(0);
    // console.log(keyCode)
  
    switch(keyCode){
        case 97:
            console.log('left')
            keys.left.pressed=false
            break;

            case 115:
                console.log('down')
                break;
                case 116:
                    console.log('right')
                    keys.right.pressed=false
                   
                    break;
                    case 119:
                        console.log('up')
                        player.velocity.y -= 10
                        break;

        
    }
    console.log(keys.right.pressed)
  });


