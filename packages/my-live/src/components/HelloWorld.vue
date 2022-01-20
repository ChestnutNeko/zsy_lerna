<template>
	<div class="hello">
		<div></div>
		<div class="cover" v-show="showCover">
			<span class="cover-info">{{ coverInfo }}</span>
		</div>
		<h1>{{ msg }}</h1>
		<input
			class="books-input"
			id="booksId"
			placeholder="请输入0+序号"
			@input="inputChange"
		/>
		<button @click="tipsClick">点击</button>
		<div>{{ tipContent }}</div>
	</div>
</template>

<script>
import { tipsConfig } from '../utils/tipsConfig'
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			coverInfo: '请稍后...',
			tipNum: '',
			tipContent: '',
			showCover: false,
		}
	},
	methods: {
		inputChange() {
			this.tipNum = document.getElementById('booksId').value
		},
		tipsClick() {
			this.tipContent = tipsConfig(this.tipNum)
		},
	},
}
</script>

<style scoped>
.hello {
	height: 100%;
	width: 100%;
}
.cover {
	position: absolute;
	left: 0px;
	top: 0px;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	display: block;
	z-index: 999;
	text-align: center;
	padding-top: 40vh;
}
.cover-info {
	color: #fff;
	font-size: 20px;
}
.books-input {
	height: 26px;
	width: 200px;
	border: 1px solid #000;
	border-radius: 4px;
	margin-right: 10px;
}
</style>
