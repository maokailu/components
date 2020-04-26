import React from 'react';
import './style.scss';
import Tile from './Tile.jsx';

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let grid = JSON.parse(localStorage.getItem('grid')) || [];
let score = 0;
let bestScore = localStorage.getItem('bestscore') || 0;
let animX = -1;
let animY = -1;
export default class Game2048 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: JSON.parse(localStorage.getItem('grid')) || [],
            gameOver: false
        };

        this.initialGrid();
    }

    restart = () => {
        score = 0;
        this.initialGrid();
    };
    // 初始化表格
    initialGrid = () => {
        // 生成整个表格
        grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        // 获取空余的表格
        let cells1 = this.availableCells();
        // 生成随机数字
        this.getRandomNum(cells1);
        let cells2 = this.availableCells();
        this.getRandomNum(cells2);
        this.setState({
            grid: grid
        });
    };
    availableCells = () => {
        // 空余表格数组[{rowIndex, columnIndex}]
        let cells = [];
        grid.map((row, rowIndex) => {
            row.map((column, columnIndex) => {
                if (!column) {
                    cells.push({ x: rowIndex, y: columnIndex });
                }
            });
        });
        return cells;
    };
    getRandomNum = cells => {
        let i = Math.floor(Math.random() * cells.length);
        let newTileText = Math.random() < 0.9 ? 2 : 2;
        let x = cells[i].x;
        let y = cells[i].y;
        grid[x][y] = newTileText;
    };
    getDirection = (startX, startY, endX, endY) => {
        let moveX = endX - startX;
        let moveY = endY - startY;
        let direction = -1;
        if (Math.abs(moveX) < 2 && Math.abs(moveY) < 2) {
            return direction;
        }
        let angle = Math.atan2(moveY, moveX) * 180 / Math.PI;
        if (angle >= -135 && angle <= -45) {
            direction = 0;
        } else if (angle > -45 && angle < 45) {
            direction = 1;
        } else if (angle >= 45 && angle <= 135) {
            direction = 2;
        } else {
            direction = 3;
        }
        return direction;
    };
    touchStartHandler = event => {
        startX = event.targetTouches[0].pageX;
        startY = event.targetTouches[0].pageY;
    };
    touchEndHandler = event => {
        endX = event.changedTouches[0].pageX;
        endY = event.changedTouches[0].pageY;
        let direction = this.getDirection(startX, startY, endX, endY);
        // this.caculateGird(direction);
        this.caculateGird2(direction);
        let cells = this.availableCells();
        if (cells.length) {
            this.getRandomNum(cells);
        }
        this.setState({
            grid: grid
        });
    };
    // 1.加上gameOver后出现了突然重启的情况 2.逻辑优化代码优化 3.修改样式后刷新好几次

    // 交换算法
    // 空格子置为0。
    // 遍历当前方向除最后一个外每个格子，与其后每个格子比较。如果相同则当前格子*2，后者置为0，并跳出循环继续遍历下一个格子；如果当前格子为0则与下个格子交换。
    // 这样一轮计算下来每个元素都将得到正确的值：即相邻元素相加并沿着移动方向紧靠在一起
    caculateGird = direction => {
        for (let i = 0; i < 4; i++) {
            let j = 0;
            let k = 0;
            let condition1 = true;
            let condition2 = true;
            switch (direction) {
            case 0:
                j = 0;
                k = 1;
                break;
            case 1:
                j = 3;
                k = 2;
                break;
            case 2:
                j = 3;
                k = 2;
                break;
            case 3:
                j = 0;
                k = 1;
                break;
            }
            while (condition1) {
                label1: while (condition2) {
                    switch (direction) {
                    case 0:
                        if (grid[j][i] === 0) {
                            grid[j][i] = grid[k][i];
                            grid[k][i] = 0;
                        } else if (grid[j][i] === grid[k][i]) {
                            grid[j][i] = grid[k][i] * 2;
                            animX = j;
                            animY = i;
                            grid[k][i] = 0;
                            score += grid[j][i];
                            break label1;
                        }
                        k++;
                        condition2 = k < 4;
                        break;
                    case 1:
                        if (grid[i][j] === 0) {
                            grid[i][j] = grid[i][k];
                            grid[i][k] = 0;
                        } else if (grid[i][j] === grid[i][k]) {
                            grid[i][j] = grid[i][k] * 2;
                            animX = i;
                            animY = j;
                            grid[i][k] = 0;
                            score += grid[i][j];
                            break label1;
                        }
                        k--;
                        condition2 = k >= 0;
                        break;
                    case 2:
                        if (grid[j][i] === 0) {
                            grid[j][i] = grid[k][i];
                            grid[k][i] = 0;
                        } else if (grid[j][i] === grid[k][i]) {
                            grid[j][i] = grid[k][i] * 2;
                            animX = j;
                            animY = i;
                            grid[k][i] = 0;
                            score += grid[j][i];
                            break label1;
                        }
                        k--;
                        condition2 = k >= 0;
                        break;
                    case 3:
                        if (grid[i][j] === 0) {
                            grid[i][j] = grid[i][k];
                            grid[i][k] = 0;
                        } else if (grid[i][j] === grid[i][k]) {
                            grid[i][j] = grid[i][k] * 2;
                            animX = i;
                            animY = j;
                            grid[i][k] = 0;
                            score += grid[i][j];
                            break label1;
                        }
                        k++;
                        condition2 = k < 4;
                        break;
                    }
                }
                switch (direction) {
                case 0:
                    j++;
                    k = j + 1;
                    condition1 = j < 3;
                    condition2 = k < 4;
                    break;
                case 1:
                    j--;
                    k = j - 1;
                    condition1 = j >= 1;
                    condition2 = k >= 0;
                    break;
                case 2:
                    j--;
                    k = j - 1;
                    condition1 = j >= 1;
                    condition2 = k >= 0;
                    break;
                case 3:
                    j++;
                    k = j + 1;
                    condition1 = j < 3;
                    condition2 = k < 4;
                    break;
                }
            }
        }
    };
    // 算法2
    // 1、剔除0
    // 2、只与旁边相同数字合并
    // 3、补全0
    caculateGird2 = (direction) => {
        for (let baseIndex = 0; baseIndex < 4; baseIndex++) {
            // 当前行非0元素集合
            const noZeroList = [];
            // 当前行合并后元素集合
            const mergedList = [];
            // 正方向
            const positiveDirection = direction === 1 || direction === 2;
            // 水平方向
            const horizontalDirection = direction === 1 || direction === 3;
            // 剔除非0元素
            for (let index = 0; index < 4; index++) {
                let elem;
                horizontalDirection ? elem = grid[baseIndex][index] : elem = grid[index][baseIndex];
                if (elem !== 0) noZeroList.push(elem);
            }

            let startIndex;
            let endIndex;
            switch (direction) {
            // 向上
            case 0:
                startIndex = noZeroList.length - 1;
                endIndex = -1;
                break;
            // 向右
            case 1:
                startIndex = 0;
                endIndex = noZeroList.length;
                break;
            // 向下
            case 2:
                startIndex = 0;
                endIndex = noZeroList.length;
                break;
            // 向左
            case 3:
                startIndex = noZeroList.length - 1;
                endIndex = -1;
                break;
            }
            // 遍历当前集合非0元素：与下一个元素对比，相同则合并下一位元素
            for (let index = startIndex; positiveDirection ? index < endIndex : index > endIndex;
                positiveDirection ? index++ : index--) {
                if (noZeroList[index] === noZeroList[index + 1]) {
                    positiveDirection ? mergedList.push(noZeroList[index] * 2) :
                        mergedList.unshift(noZeroList[index] * 2);
                    // 跳过已经被合并的下一位元素
                    positiveDirection ? index++ : index--;
                } else {
                    positiveDirection ? mergedList.push(noZeroList[index]) :
                        mergedList.unshift(noZeroList[index]);
                }
            }
            // 用0补全表格行
            const zeroList = new Array(4 - mergedList.length).fill(0);
            const finalList = positiveDirection ?
                zeroList.concat(mergedList) : mergedList.concat(zeroList);
            if (horizontalDirection) {
                grid[baseIndex] = finalList;
            } else {
                for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
                    grid[rowIndex][baseIndex] = finalList[rowIndex];
                }
            }
            console.log(mergedList);
        }
        let gameOver = true;
        // 判断游戏是否结束：每次移动后，遍历每个格子周围是否有相同数字
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ((i !== 0 && grid[i][j] === grid[i - 1][j]) ||
                    (j !== 3 && grid[i][j] === grid[i][j + 1]) ||
                    (i !== 3 && grid[i][j] === grid[i + 1][j]) ||
                    (j !== 0 && grid[i][j] === grid[i][j - 1])
                ) {
                    gameOver = false;
                }
            }
        }
        this.setState({
            gameOver: gameOver
        });
    };
    render() {
        const { gameOver } = this.state;
        score > bestScore ? (bestScore = score) : bestScore;
        localStorage.setItem('bestscore', bestScore);
        localStorage.setItem('grid', JSON.stringify(this.state.grid));
        return (
            <div className="game-container">
                {
                    <div>
                        <div className="heading">
                            <span className="title">2048</span>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="score">
                                    <span className="tit">SCORE</span> <span>{score}</span>
                                </div>
                                <div className="best-score">
                                    <span className="tit">BEST</span> <span>{bestScore}</span>
                                </div>
                            </div>
                        </div>
                        <div className="above-game">
                            <span className="tit">Join the numbers and get to the 2048 tile!</span>
                            <div className="restart" onClick={this.restart}>
                                New Game
                            </div>
                        </div>
                    </div>
                }
                <div
                    className="grid"
                    onTouchStart={!gameOver ? this.touchStartHandler : null}
                    onTouchEnd={!gameOver ? this.touchEndHandler : null}
                >
                    {this.state.grid.map((row, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {row.map((cell, columnIndex) => (
                                <div className="tr-container" key={rowIndex * 4 + columnIndex + 1}>
                                    {this.state.grid[rowIndex][columnIndex] !== 0 && (
                                        <Tile
                                            num={cell}
                                            anim={animX === rowIndex && animY === columnIndex ? true : null}
                                        />
                                    )}
                                    <div className="cell" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {gameOver && (
                    <div className="wrapper">
                        <div className="game-over">Game Over</div>
                    </div>
                )}
            </div>
        );
    }
}

// todolists:
// localstorage:grid gameover 卡主
// 动画
// 移动动画：是计算表格还是该方向所有移动2
// issue11
// master
