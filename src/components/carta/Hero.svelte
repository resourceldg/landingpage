<div
    class=" gap-4 ml-8 mr-8 mb-10 mt-1 grid-cols-1 rounded-bl shadow-lg bg-gray-100">
    <div class=" grid md:grid-cols-2 place-items-center p-4 mt-8 mb-8">
        <div>
            <h1 class="font-sans-Roboto font-bold md:text-left text-center text-purple-500 text-2xl md:text-4xl mt-4 p-4 ">
                <slot name="heroTitle"> Creamos tu menú digital y/o catálogo de productos con
                 <span class="text-blue-500">tecnología QR </span>
                 <span class="underline"> por solo </span>
                 <br/><span class="text-green-500">$ 5000 </span>
                 <br> <span class="text-blue-600">SIN COSTO MENSUAL </span>
             </slot>
             </h1>
        </div>
        <div class="self-center">
            <img src="menuu.png" alt="astro" width="400" height=auto>
        </div>
        
    </div>
        <div class="grid justify-center mt-8 mb-8">
            <button class="  w-64  mt-4 mb-4  ring ring-purple-600 ring-offset-4 ring-offset-purple-100 hover:text-gray-50 transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:-translate-y-1 hover:scale-110 font-bold py-2 px-4 rounded-xl m-2">
                <slot name="heroButtom"> Comprar</slot>
               
            </button>
        </div>
        <div>
            <p class=" text-blue-500 font-bold text-center mt-4">
                <slot name="heroPharagraph">*Oferta válida por 48 hs.</slot>
                
            </p>
        </div>
       
        
  
</div>