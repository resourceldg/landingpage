<script>
    import { goto, stores } from '@sapper/app';

    const { page, session } = stores();
</script>

<nav>
    <ul>
        <li><a href="/">Oferta<b class="text-gradient-to-r from-purple-400 via-pink-500 to-red-500"> Web</b></a></li>

      {#if $session.token}
            <li><a class:active="{$page.path === '/profile'}"  href="profile">perfil</a></li>
        {:else}
            <li><a class:active="{$page.path === '/about'}" href="about">about</a></li>
            <li><a class:active="{$page.path === '/login'}" href="login">login</a></li>
            <li><a class:active="{$page.path === '/signup'}" href="signup">register</a></li>
        
        {/if}
    </ul>
</nav>

<style>
    nav {
        border-bottom: 1px solid rgba(21, 10, 34, 0.1);
        font-weight: 400;
        padding: 0 1em;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }

    b {
        padding-right: 3em;
    }
</style>
