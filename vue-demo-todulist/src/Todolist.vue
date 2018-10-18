<template>
<div>
	<Title :title="title" :subtitle="subtitle"></Title>

	<input @keyup.enter="handleClick" type="text" v-model="mytodo" />
	<button @click="handleClick">添加</button>
	<button @click="clean">清空</button>
	<ul>
		<!-- <li :class="{'done':todo.done}" @click="toggle(index)" v-for="(todo,index) in todos"></li> -->
		<li :class="{'done':todo.done}" @click="toggle(index)" v-for="(todo,index) in todos">{{todo.text}}</li>
	</ul>
	<p>
		{{remain}}/{{this.todos.length}}
	</p>
</div>
</template>

<script>
import Title from './components/Title'

export default {
	name: "Todolist",
	components: {
		Title,
	},
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
			return this.todos.filter(t => !t.done).length
		}
	},
	methods: {
		handleClick() {
			this.todos.push({
				text: this.mytodo,
				done: false
			})
		},
		clean() {
			this.todos = this.todos.filter(t => !t.done)
		},
		toggle(index) {
			this.todos[index].done = !this.todos[index].done;
		}
	}
}
</script>

<style scoped>
li.done {
	text-decoration: line-through;
	color: "red";
}
</style>
