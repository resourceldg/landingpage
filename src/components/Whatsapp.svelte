<script>
    import Hero from "./Hero.svelte";
</script>

<style>
    .wsp {
        transition: 0.3s ease-out;
    }
    .wsp:hover {
        transform: rotate(360deg);
    }
</style>

<div class="grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl">
    <div class= "p-4 col-span-2">
        <h2>
            <span class="font-bold">Hey emprendedor!!!</span>
            <br />Con esta Web tendrás email corporativo, Whatsapp integrado, si
            estás buscando una tienda en linea revisá debajo el plan que mejor se
            adapte a tus necesidades o hacé clíck en el logo y escibirnos...
        </h2>
    </div>
    <div class="grid col-start-3 col-span-1 ">
        <img class="wsp " src="wsp2.png" alt="logo whatsapp" />
    </div>
</div>