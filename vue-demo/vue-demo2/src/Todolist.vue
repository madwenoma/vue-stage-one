<template>
<div>
	<!-- <Title :title="title" :subtitle="subtitle"></Title> -->
	<div>
		<input @keyup.enter="handleClick" type="text" v-model="mytodo" />
		<button @click="handleClick">添加</button>
		<button @click="clean">清空</button>
	</div>
	<ul>
		<li :class="{'done':todo.done}" @click="toggle(index)" v-for="(todo,index) in todos"></li>
	</ul>
</div>
</template>

<script>
// import Title from './Title'

export default {
	// components: {
	// 	Title,
	// },
	data() {
		return {
			title: "todo list title",
			subtitle: "todo list subtitle",
			showSub: true,
			mytodo: "",
			todos: [{
					text: '吃饭',
					done: false
				},
				{
					text: '跑步',
					done: false
				},
				{
					text: '鞋子',
					done: false
				}
			]

		}
	},
	computed: {
		remain() {
			return this.todos.filter(v => !v.done).length;
		}

	},
	methods: {
		handleClick() {

		},
		clear() {

		},
		toggle(index) {

		}
	}
}
</script>

<style>
li.done {
	text-decoration: line-through;
	color: 'red'
}
</style>
