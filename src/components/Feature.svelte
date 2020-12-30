<div class="grid grid-cols-4 justify-items-start gap-2 rounded-bl ">

    <div class="place-self-end">
        <slot name="featureIcon">aquí va un ícono</slot>
    </div>

    <div class="text-indigo-600 font-bold col-span-3 self-center ">
        <slot name="featureContent"><!-- optional fallback --></slot>
    </div>

</div>