<template>
<div class="progressbar">
	<progress :percent='percent' activeColor='#EA5A49'></progress>
	<p>
		{{years}}已经过去了{{days}}天,{{percent}}%
	</p>
</div>
</template>

<script>
export default {


	computed: {
		years() {
			return new Date().getFullYear()
		},
		days() {
			let start = new Date()
			start.setMonth(0)
			start.setDate(1)
			let offset = new Date().getTime() - start.getTime()
			return parseInt(offset / 1000 / 60 / 60 / 24) + 1
		},
		percent() {
			return (this.days * 100 / 365).toFixed(1)
		}
	}
}
</script>

<style>
.progressbar {
	width: 100%;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 20px;
}

progress {
	margin-bottom: 10px;
}
</style>
