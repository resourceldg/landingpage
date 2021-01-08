<script>
    import Feature from "./Feature.svelte";
</script>

<div class="shadow-lg ">
    <div class="grid place-items-center m-8 p-4 ">
        <h2 class="text-blue-600 font-bold font-size-lg text-2xl mb-4">
            <span class="text-green-500">ESTE VERANO NOS CUIDAMOS ENTRE TODOS...</span>
            <br />
            Por menos de lo que cuesta una zapatilla obtenés...
        </h2>
    </div>
    <div class="grid self-center">
        <Feature>
            <span slot="featureIcon"> <img  src="qrscan.png" alt="caja" width="200" height=auto /></span>
            <span slot="featureContent">Hasta 100 productos o servicios</span>
        </Feature>
    </div>
</div>
   
