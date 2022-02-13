<template>
	<div class="wrapper">
		<div id="card"  class="card">
			<div class="card-info">
				<div class="card-image">
					<img v-bind:src="avatar" class="card-avatar card-avatar--circle" />
				</div>
				<div class="card-fields">
					<h1 class="card-name">{{ fullName }}</h1>
				</div>

				<h2 v-show="true" class="card-email">{{ email }}</h2>
			</div>
			<div class="flex-container">
				<button v-on:click="editContent" class="card-button card-edit">
					<i class="material-icons" aria-hidden="true">info</i>
				</button>

				<button v-on:click="editContent" class="card-button card-edit">
					<i class="material-icons" aria-hidden="true">edit</i>
				</button>
        <button v-on:click="editContent" class="card-button card-edit">
					<i class="material-icons" aria-hidden="true">delete</i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'ContactCard',

		data() {
			return {
				firstName: 'Nicholas',
				lastName: 'Cage',
				email: 'nicholas.cage@theone.com',
				avatar: 'http://www.placecage.com/c/128/128',
				bio: 'Back in my day...',
				isShelfOpen: false,
				isEditing: false,
			};
		},
props: {
    contato: {
      type: Object,
      required: true,
    },
  },
		computed: {
			fullName() {
				return this.firstName + ' ' + this.lastName;
			},
		},
		methods: {
			shelfToggle() {
				this.isShelfOpen = !this.isShelfOpen;
			},
			editContent() {
				if (!this.isEditing) {
					this.isEditing = !this.isEditing;
					this.isShelfOpen = true;
				} else {
					this.isEditing = !this.isEditing;
					this.isShelfOpen = false;
				}
			},
		},
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
	@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
	.flex-container {
		display: flex;
		position: absolute;
		right: 0.5em;
		top: 0.5em;
	}
	.card {
		align-items: center;
		background: #fff;
		border-radius: 0.3em;
		border: 0.0625em solid mix(#fff, #abbaab, 20%);
		box-shadow: 0 0 1.7em 0 rgba(#abbaab, 0.55);
		display: flex;
		flex-direction: column;
		max-width: 18em;
		position: relative;
		width: 100%;
	}

	.card-info {
		padding: 1.2em 1em;
		position: relative;
		text-align: center;
		width: 100%;
	}

	.card-image {
		margin: auto;
		max-width: ((128px/16px) * 1em);
	}

	.card--is-edit .card-image {
		margin-bottom: 1em;
	}

	.card-avatar {
		display: block;
		height: auto;
		width: 100%;
	}

	.card-avatar--circle {
		border-radius: 50%;
	}

	.card-name {
		font-size: 1.8em;
		margin-bottom: 0.2em;
	}

	.card-email {
		font-size: 1.2em;
		font-weight: 400;
		margin-top: 0;
	}

	.card-button {
		align-items: center;
		border: 0;
		cursor: pointer;
		display: flex;
		user-select: none;

		> .material-icons {
			font-size: inherit;
		}
	}

	.card-button[disabled] {
		cursor: stop;
		opacity: 0.6;
		pointer-events: none;
	}

	.card-edit {
		background: transparent;
		border-radius: 0.2em;
		color: #bbb;
		padding: 0.25em;
		flex-direction: row;

		right: 0.5em;
		top: 0.5em;

		&:hover {
			background: #eee;
			color: coral;
		}
	}

	html {
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	body {
		font-family: 'Source Sans Pro', sans-serif;
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		height: 30vh;
		flex-wrap: wrap;
	}
</style>
