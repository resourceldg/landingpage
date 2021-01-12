<script>
    import Feature from "./Feature.svelte";
</script>

<div class="shadow-lg grid grid-cols-1 place-items-center ">
    <div class="grid place-items-center m-8 p-4 ">
        <h2 class="text-blue-600 font-bold text-lg md:text-2xl mb-4">
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
   
        <div class="grid self-center justify-center m-8">
            <h2 class="text-blue-600 font-bold text-lg md:text-2xl mb-4">
                <span class="text-green-500">Clickeá debajo para ver una demo...</span>
                </h2>
            <a href="https://menu-gamma.vercel.app/?utm_source=haciademo1&utm_medium=btn%20hacia%20demo1&utm_campaign=getting%20started">
                <button class=" text-gray-200 font-bold p-4 transition duration-500 ease-in-out 
                bg-blue-600 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 ...">
                Ver Demo
               </button></a> 
        </div>
     
</div>
   
