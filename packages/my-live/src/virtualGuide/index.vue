<template>
	<div class="virtual-guide">
		<div class="guide-animation"></div>
		<div class="guide-animation-w"></div>
		<div class="guide-tips">
			{{ randomArr.tips && randomArr.tips[Math.floor(Math.random() * randomArr.tips.length)] }}
		</div>
	</div>
</template>

<script>
import CanvasKeyFrames from 'canvaskeyframes'

export default {
	name: 'VirtualGuide',
	data() {
		return {
			guideArr: [
				{
					animation: null,
					tips: [
						'拿出手机扫一扫，快来抢红包了！',
						'摇一摇，超多红包福利等你来拿~',
						'准备好，我要发红包了哦！',
						'下（红包）雨啦，收衣服啦！',
					],
				},
				{
					animation: null,
					tips: [
						'拿走，不谢！',
						'手段再高，不如发个红包',
						'哼！领不完别来见我',
					],
				},
				{
					animation: null,
					tips: [
						'欢迎光临，抢个红包再走吧？',
						`还剩${this.redPacketNum}个红包，抓紧来抢啦`,
					],
				},
			],
			randomArr: {},
		}
	},
	props: {
		type: {
			type: String,
			default: 'heng', // heng横屏 shu竖屏
		},
		redPacketNum: {
			type: Number || String,
			default: 0, // 剩余红包个数
		}
	},
	async mounted() {
		this.guideArr[0].animation = await this.initKeyFrame({
			name: 'cats',
			num: 2,
			el: '.virtual-guide .guide-animation',
		});
		this.guideArr[1].animation = await this.initKeyFrame({
			name: 'catsW',
			num: 2,
			el: '.virtual-guide .guide-animation-w',
		});
		this.randomArr =
			this.guideArr[Math.floor(Math.random() * this.guideArr.length)];
		this.randomArr.animation && this.randomArr.animation.play();
		console.log('====', this.randomArr)
	},
	methods: {
		async initKeyFrame({ name, num, el, options = {} }) {
			const defOptions = {
				fps: 10,
				width: 200,
				height: 230,
				ratio: 2,
				loop: '1',
			}
			const loadPic = (src) => {
				return new Promise((resolve) => {
					const img = new Image()
					img.onload = () => {
						img.onload = null
						resolve(img)
					}
					img.onerror = () => {}
					img.src = src
				})
			}
			const imgUrl = []
			for (let i = 0; i <= num; i++) {
				imgUrl.push(loadPic(require(`../imgs/${name}/${i}.png`)))
			}
			const imgArr = await Promise.all(imgUrl)
			const container = document.querySelector(el)
			return new CanvasKeyFrames(container, 'array', imgArr, {
				...defOptions,
				...options,
			})
		},
	},
}
</script>

<style scoped>
.virtual-guide {
	height: 100%;
	position: fixed;
	left: 30px;
	bottom: 100px;
}
.guide-animation, .guide-animation-w {
	position: fixed;
	opacity: 0.9;
	bottom: 10px;
	bottom: 10px;
	z-index: 99999;
	width: 200px;
	height: 230px;
}
.guide-tips {
	position: fixed;
	opacity: 0.9;
	margin-left: 100px;
	bottom: 260px;
	z-index: 99999;
	width: 300px;
	height: 100px;
	background-color: pink;
}
</style>
