<script>
    import { goto, stores } from '@sapper/app';
    import { post } from './utils.js';
    import { onMount } from 'svelte';
    const { session } = stores();

    onMount(() => {
        if (!$session.token) {
            goto('/login');
        }
    });

    async function out() {
        const result = await post('/logout');
        if (result) {
            $session.token = null;
            goto('/');
        }
    }
    
</script>


    <button on:click={out}>logout</button>
    <p>token {JSON.stringify({ $session })}</p>
    