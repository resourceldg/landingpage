<script>
    import { goto, stores } from '@sapper/app';

    const { page, session } = stores();
</script>

<nav class="shadow-lg ">
    <ul>
        <li><a href="/"><b class="mr-3 rounded-2xl ring ring-purple-600 ring-offset-4 ring-offset-purple-100"> Oferta</b>Web</a></li>

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
