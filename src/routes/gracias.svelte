<script>
	import Whatsapp from './../components/carta/Whatsapp.svelte';
</script>
<div class="grid grid-cols-1 content-center">
    <div class="grid justify-center">
        <h1 class="md:text-4xl text-lg text-center text-gray-700 mt-8">Tu compra se ha realizado exitosamente!!</h1>
    </div>
    <div class="grid justify-center">
        <img src="sloth.png" alt="osito durmiendo" width="400" height=auto>
    </div>
    <div>
        <Whatsapp>
            <span slot="text_wsp">
                <h3 class="text-sm text-gray-700">
                    <span class="font-bold text-lg  ">GRACIAS POR CONTRATARNOS</span>
                    <br />Para comenzar mandanos un email a soporte@softweel.com o <span class="font-bold"></span> <br>
                avisanos por wsp... hacé click en el logo y escibinos...
                </h3>
        
            </span>
            <span slot="img_wsp">
                <a href="https://wa.link/oufie2"> <img class="wsp object-fill" src="wsp2.png" alt="logo whatsapp" /></a>
            </span>
            
        </Whatsapp>
    </div>

</div>
