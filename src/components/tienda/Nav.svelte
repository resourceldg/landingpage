<script>
    import { goto, stores } from '@sapper/app';

    const { page, session } = stores();
</script>

<nav class="shadow-lg ">
    <ul class="grid text-xs grid-cols-2 space-items-center">
        <li ><a href="/"  ><b >Oferta</b> WEB</a></li>
       <li class=" invisible"><a href="/gracias"  ><b>gracias</b></a></li>
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
    li:active{
        color:aqua;
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
