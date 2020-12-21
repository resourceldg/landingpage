<script context="module">
	export function preload(page, session) {
	  console.log(session);
	}
</script>

<script>
	export let blogs;
</script>
<style>
	ul, p {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.main-title {
		font-size: 25px;
	}
</style>

<svelte:head>
	<title>articles</title>
</svelte:head>

<h1>recent posts</h1>

<ul>
	{#each blogs as blog}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a class="main-title" rel='prefetch' href='articles/{blog.Slug}'>{blog.Title}</a></li>
		<p> {blog.Published, "DD-MM-YYYY"} ago by {blog.author.username} </p>
	{/each}
</ul>

