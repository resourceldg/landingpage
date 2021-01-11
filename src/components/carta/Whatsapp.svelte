
<style>
    .wsp {
        transition: 0.3s ease-out;
    }
    .wsp:hover {
        transform: rotate(360deg);
    }
</style>

<div
    class="grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl">
    <div class="p-4 col-span-2">
        <slot name="text_wsp"> <h3 class="text-sm text-gray-700">
            <span class="font-bold text-2xl  ">Qué estás esperando?</span>
            <br />Ya podés tener tu catálogo de serivicos o productos listo para 
            pegar por toda tu tienda y además compartirla por cualquier medio digital. 
            <span class="font-bold">Vendé como un profesional</span> <br>
            Si tenés dudas hacé click en el logo y escibinos...
        </h3></slot>
       
    </div>
    <div class="grid col-start-3  mr-2">
        <slot name="img_wsp">
             <a href="https://wa.link/2wlo0v"> <img class="wsp object-fill" src="wsp2.png" alt="logo whatsapp" /></a>
            </slot>
    </div>
</div>
