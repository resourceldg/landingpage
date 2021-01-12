
<script>
	import { stores } from '@sapper/app';
	import GoogleAnalytics from './../components/GoogleAnalytics.svelte';
	import Nav from '../components/tienda/Nav.svelte';
	

	export let segment;
</script>

<style>

</style>
<GoogleAnalytics/>
<Nav {segment}/>

<main class="container w-full  mx-auto  ">
	<slot></slot>
</main>