<div class="place-items-center">
    <div class="grid  grid-rows-2 gap-4 m-4 p-4 shadow-lg place-items-center ">
        <div>
            <slot name="cardImage">
                <!-- optional fallback -->
            </slot>
        </div>
        <div>
            <h3 class="font-bold ">
                <slot name="cardTitle">
                    <!-- optional fallback -->
                </slot>
            </h3>
            <p>
                <slot name="cardPharagraph">
                    <!-- optional fallback -->
                </slot>
            </p>
        </div>
        <div>
            <button
                type="button"
                class="p-4 m-4 text-gray-50 font-bold shadow-lg  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded">
                <slot name="cardButtom">
                    <!-- optional fallback -->
                </slot></button>
        </div>
    </div>
</div>
