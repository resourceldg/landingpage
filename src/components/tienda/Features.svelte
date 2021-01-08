<script>
    import Feature from "./Feature.svelte";
</script>

<div class="shadow-lg ">
    <div class="grid place-items-center m-8 p-4 ">
        <h2 class="text-blue-600 font-bold font-size-lg text-2xl mb-4">
            <span class="text-green-500">NO LA PIENSES MAS</span>
            <br />
            Por menos de lo que cuesta una zapatilla obtenés...
        </h2>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img  src="loyalty-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent">Hasta 10 productos o servicios</span>
        </Feature>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img src="storefront-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent"> Intergración con Mercado Pago</span>
        </Feature>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img src="facebook-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent">Redes Sociales</span>
        </Feature>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img src="question_answer-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent">Whatsapp Integrado</span>
        </Feature>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img src="backup-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent">Respaldo basico de tus datos</span>
        </Feature>
    </div>
    <div>
        <Feature>
            <span slot="featureIcon"> <img src="security-24px.svg" alt="caja" width="40" height="40" /></span>
            <span slot="featureContent">Seguridad mediante certificados SSL</span>
        </Feature>
    </div>
    
</div>
