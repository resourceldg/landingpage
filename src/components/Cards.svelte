<script>
    import Card from "./Card.svelte";
        
</script>

<div
    class="grid md:grid-cols-3 gap-4 rounded-bl place-items-center m-4 shadow-lg mt-20 mb-36">
    <Card  >
        <span slot="cardImage"> <img src="small.svg" alt="caja" width="70" height="70" /></span>
        <span slot="cardTitle">Tienda S</span>
        <span slot="cardPharagraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            natus ut animi qui ab? Culpa excepturi doloremque accusamus beatae
            qui, odio est repudiandae vitae aperiam cumque tenetur hic neque
            obcaecati.</span>
        <span slot="cardButtom">Comprar</span>
    </Card>
    <Card>
        <span slot="cardImage"> <img src="medium.svg" alt="caja" width="70" height="70" /></span>
        <span slot="cardTitle">Tienda M</span>
        <span slot="cardPharagraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            natus ut animi qui ab? Culpa excepturi doloremque accusamus beatae
            qui, odio est repudiandae vitae aperiam cumque tenetur hic neque
            obcaecati.</span>
        <span slot="cardButtom">Comprar</span>
    </Card>
    <Card>
        <span slot="cardImage"> <img src="large.svg" alt="caja" width="70" height="70" /></span>
        <span slot="cardTitle">Tienda L</span>
        <span slot="cardPharagraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            natus ut animi qui ab? Culpa excepturi doloremque accusamus beatae
            qui, odio est repudiandae vitae aperiam cumque tenetur hic neque
            obcaecati.</span>
        <span slot="cardButtom">Cotizar</span>
    </Card>

    
</div>
