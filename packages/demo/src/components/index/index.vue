<template>
	<div class="index-container">
		<div class="game-turntable">
			<div class="game-turntable-content" id="turntable"></div>
			<div class="game-turntable-btn" @click="ctrlBtn">按钮</div>
		</div>
	</div>
</template>

<script>
import Turntable from 'lottery-turntable'

export default {
	name: 'Index',
	data() {
		return {
			isStop: false,
      turntable: null
		}
	},
	mounted() {
		this.turntable = new Turntable({
			size: 280,
			textSpace: 15,
			imgSpace: 54,
			speed: 8, //触发start事件后，转盘开始转动的速度，数字必须能给360整除
			fastSpeed: 15, //转盘进入高速转动的速度，数字必须能够给360整除
			slowSpeed: 8, //转盘从高速转动降下来的速度，数字必须能够给360整除
			speedUp: 1000, //多少毫秒后进入高速转动
			speedDown: 2500, //触发stop事件后，多少毫秒进入缓速
			values: [
				{
					id: 0,
					name: '感谢参与',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fc796f',
					bg: '#fffdeb',
				},
				{
					id: 1,
					name: 'M+T恤',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fbe0e1',
					bg: '#ed6e71',
				},
				{
					id: 1,
					name: '太空杯',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fc796f',
					bg: '#fffdeb',
				},
				{
					id: 3,
					name: '电影券',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fbe0e1',
					bg: '#ed6e71',
				},
				{
					id: 0,
					name: '感谢参与',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fc796f',
					bg: '#fffdeb',
				},
				{
					id: 4,
					name: '魅族雨伞',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fbe0e1',
					bg: '#ed6e71',
				},
				{
					id: 5,
					name: 'Pro 5',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fc796f',
					bg: '#fffdeb',
				},
				{
					id: 6,
					name: '魅蓝metal',
					img: {
						width: 50,
						height: 50,
						src: 'https://raw.githubusercontent.com/coffeedeveloper/turntable/master/examples/images/umbrella.png',
					},
					color: '#fbe0e1',
					bg: '#ed6e71',
				},
			],
		})
		this.turntable.draw(document.getElementById('turntable'));
	},
	methods: {
		ctrlBtn() {
			if (this.isStop) {
				// this.turntable.stop(this.random(0, 6), function (data) {
				// 	alert('恭喜你获得了：' + data.name)
				// })
        this.turntable.stop(1, (data) => {
          console.log("===data",data, data.name);
        });
			} else {
				this.turntable.start();
			}
			this.isStop = !this.isStop;
		},

		random(min, max) {
			return min + Math.floor(Math.random() * (max - min + 1));
		},
	},
}
</script>

<style>
.index-container {
	position: fixed;
	top: 0;
	width: 750px;
	height: 100vh;
	margin: auto;
	background-size: 750px;
	background-color: #dcfdff;
	background-repeat: no-repeat;
	background-position: center top;
}
.game-turntable {
	width: 375px;
  position: relative;
}
.game-turntable-btn {
	width: 50px;
	height: 50px;
	background-color: pink;
  position: absolute;
}
</style>
