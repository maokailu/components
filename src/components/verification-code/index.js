import React from 'react';
import './style.scss';
export default class Verification extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getImg();
    }
    getImg = () =>{
        this.result = this.verification();
        this.vcode = this.result.code; // 随机生成的验证码
        this.imgDataURL = this.result.dataURL;
    }
    randFloat(start, end) {
        return start + Math.random() * (end - start);
    }
    randInt(start, end) {
        return Math.floor(Math.random() * (end - start)) + start;
    }
    verification = ()=> {
        const randFloat = this.randFloat;
        let randInt = this.randInt,
            selfWidth  = 80,
            selfHeight = 40,
            canvas     = document.getElementById('canvas'),
            ctx        = canvas.getContext('2d'),
            temp       = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPRSTUVWXYZ23456789'.split(''),
            vCode      = '',
            color      = 'rgb(' + randInt(1, 120) + ',' + randInt(1, 120) + ',' + randInt(1, 120) + ')';

        canvas.width = selfWidth;
        canvas.height = selfHeight;
        ctx.fillStyle = '#f3fbfe';
        ctx.fillRect(0, 0, selfWidth, selfHeight);
        ctx.globalAlpha = .8;
        ctx.font = '20px sans-serif';

        for (var _i = 0; _i < 10; _i++) {
            ctx.fillStyle = 'rgb(' + this.randInt(150, 225) + ',' +
            this.randInt(150, 225) + ',' + randInt(150, 225) + ')';
        }

        ctx.font = 'bold 20px sans-serif';
        for (var i = 0; i < 4; i++) {
            let tempIndex = randInt(0, temp.length);
            ctx.fillStyle = color;
            ctx.fillText(temp[tempIndex], 5 + i * 23, 25);
            ctx.transform(randFloat(0.85, 1.0), randFloat(-0.04, 0), randFloat(-0.3, 0.3), randFloat(0.85, 1.0), 0, 0);
            vCode += temp[tempIndex];
        }

        ctx.beginPath();
        ctx.strokeStyle = color;
        var b         = randFloat(selfHeight / 4, 3 * selfHeight / 4),
            f         = randFloat(selfHeight / 4, 3 * selfHeight / 4),
            w         = 2 * Math.PI / (randFloat(selfHeight * 1.5, selfWidth)),
            linePoint = x => {
                return randFloat(10, selfHeight / 2) * Math.sin(w * x + f) + b;
            };

        ctx.lineWidth = 5;
        for (var x = -20; x < 200; x += 4) {
            ctx.moveTo(x, linePoint(x));
            ctx.lineTo(x + 3, linePoint(x + 3));
        }
        ctx.closePath();
        ctx.stroke();
        return {
            code: vCode.toLowerCase(),
            dataURL: canvas.toDataURL()
        };
    };

    render() {
        return (
            <div className="verification">
                <canvas id="canvas" onClick={this.getImg}>
您的浏览器不支持 HTML5 canvas 标签。</canvas>
            </div>
        );
    }
}
