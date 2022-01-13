<template>
	<div class="hello">
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
			tipNum: '',
			tipContent: '',
		}
	},
	methods: {
		inputChange() {
      this.tipNum = document.getElementById('booksId').value;
		},
		tipsClick() {
			this.tipContent = tipsConfig(this.tipNum);
		},
	},
}
</script>

<style scoped>
.hello {
	height: 100%;
	width: 100%;
}
.books-input {
	height: 26px;
	width: 200px;
	border: 1px solid #000;
	border-radius: 4px;
	margin-right: 10px;
}
</style>
