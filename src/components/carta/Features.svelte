<script>
    import Feature from "./Feature.svelte";
</script>

<div class="shadow-lg grid grid-cols-1 place-items-center ">
    <div class="grid place-items-center m-8 p-4 ">
        <h2 class="text-blue-600 font-bold font-size-lg text-2xl mb-4">
            <span class="text-green-500">NO PIERDAS MAS VENTAS...</span>
            <br />
            El mundo cabe en un QR, todos tus productos o servicios listos para scanearlos y compartirlos donde quieras y como quieras.
        </h2>
    </div>
    <div class="grid self-center">
        <Feature>
            
            <span slot="featureContent">La complicada crisis sanitaria que estamos atravesando hace
                que tu comercio reduzca la cantidad de personas dentro de un local, limite también las interacciones
                 con cartas, folletos o documentos en papel. Nuestra solución permite
                 que mientras tus clientes esperan ser atendidos, puedan interactuar digitalmente con tus productos o servicios
                 en una interfaz rápida  intuitiva con enormes posibilidades de fidelización y retargeting.
            </span>
            <span slot="featureIcon"> <img  src="qrscan.png" alt="caja" width="200" height=auto /></span>
        </Feature>
        
    </div>
    <!-- <div class="grid self-center gap-4 m-8">
        
        <a href="/"><button class="transition duration-500 ease-in-out  bg-blue-200 hover:bg-blue-400 hover:shadow-lg  transform hover:-translate-y-1 hover:scale-110 rounded-lg p-4"> Demo</button></a>
    </div>
    -->
</div>
   
