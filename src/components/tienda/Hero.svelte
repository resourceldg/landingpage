<div
    class=" gap-4 ml-8 mr-8 mb-10 mt-1 grid-cols-1 rounded-bl shadow-lg bg-gray-100">
    <div class=" mb-8">
        <h1 class="font-sans-Roboto font-bold text-center text-purple-500 text-4xl md:text-6xl mt-4 p-4 ">
           <slot name="heroTitle"> Creá tu tienda
            <br /><span class="text-blue-500">on line</span>
            HOY! por
            <br /><span class="underline"> solo </span>
            <br /><span class="text-green-500">$ 5000 </span>
        </slot>
        </h1>
        </div>
        <div class="grid justify-center mt-8 mb-8">
            <button class="  w-64  mt-4 mb-4  ring ring-purple-600 ring-offset-4 ring-offset-purple-100 hover:text-gray-50 transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:-translate-y-1 hover:scale-110 font-bold py-2 px-4 rounded-xl m-2">
                <slot name="heroButtom"> Comprar</slot>
               
            </button>
        </div>
        <div>
            <p class=" text-blue-500 font-bold text-center mt-4">
                <slot name="heroPharagraph">*Oferta válida por 48 hs, el costo de alojamiento mensual mínimo es
                    de $500.</slot>
                
            </p>
        </div>
       
        
  
</div>