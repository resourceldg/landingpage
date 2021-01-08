import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, x as text, a as space, b as claim_element, f as children, y as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, z as noop, c as create_slot, n as get_slot_context, o as get_slot_changes, t as transition_in, p as transition_out, q as create_component, r as claim_component, u as mount_component, w as destroy_component, A as query_selector_all } from './client.24d855b6.js';

/* src/components/carta/Whatsapp.svelte generated by Svelte v3.22.2 */

const file = "src/components/carta/Whatsapp.svelte";

function create_fragment(ctx) {
	let div2;
	let div0;
	let h3;
	let span0;
	let t0;
	let t1;
	let br0;
	let t2;
	let span1;
	let t3;
	let t4;
	let br1;
	let t5;
	let t6;
	let div1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			h3 = element("h3");
			span0 = element("span");
			t0 = text("Qué estás esperando!!!");
			t1 = space();
			br0 = element("br");
			t2 = text("Ya podés tener tu catálogo de serivicos o productos listo para \n            pegar por toda tu tienda mientras estás atendiendo y además compartirla por cualquier medio digital. \n            ");
			span1 = element("span");
			t3 = text("Vendé como un profesional");
			t4 = space();
			br1 = element("br");
			t5 = text("\n            Si tenés dudas hacé click en el logo y escibinos...");
			t6 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			span0 = claim_element(h3_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Qué estás esperando!!!");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(h3_nodes);
			br0 = claim_element(h3_nodes, "BR", {});
			t2 = claim_text(h3_nodes, "Ya podés tener tu catálogo de serivicos o productos listo para \n            pegar por toda tu tienda mientras estás atendiendo y además compartirla por cualquier medio digital. \n            ");
			span1 = claim_element(h3_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, "Vendé como un profesional");
			span1_nodes.forEach(detach_dev);
			t4 = claim_space(h3_nodes);
			br1 = claim_element(h3_nodes, "BR", {});
			t5 = claim_text(h3_nodes, "\n            Si tenés dudas hacé click en el logo y escibinos...");
			h3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "font-bold text-2xl  ");
			add_location(span0, file, 14, 12, 320);
			add_location(br0, file, 15, 12, 397);
			attr_dev(span1, "class", "font-bold");
			add_location(span1, file, 17, 12, 593);
			add_location(br1, file, 17, 69, 650);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 13, 8, 273);
			attr_dev(div0, "class", "p-4 col-span-2");
			add_location(div0, file, 12, 4, 236);
			attr_dev(img, "class", "wsp object-fill svelte-vnq8fq");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file, 22, 8, 793);
			attr_dev(div1, "class", "grid col-start-3  mr-2");
			add_location(div1, file, 21, 4, 748);
			attr_dev(div2, "class", "grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl");
			add_location(div2, file, 10, 0, 129);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, h3);
			append_dev(h3, span0);
			append_dev(span0, t0);
			append_dev(h3, t1);
			append_dev(h3, br0);
			append_dev(h3, t2);
			append_dev(h3, span1);
			append_dev(span1, t3);
			append_dev(h3, t4);
			append_dev(h3, br1);
			append_dev(h3, t5);
			append_dev(div2, t6);
			append_dev(div2, div1);
			append_dev(div1, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Whatsapp> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Whatsapp", $$slots, []);
	return [];
}

class Whatsapp extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Whatsapp",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/carta/Hero.svelte generated by Svelte v3.22.2 */

const file$1 = "src/components/carta/Hero.svelte";
const get_heroPharagraph_slot_changes = dirty => ({});
const get_heroPharagraph_slot_context = ctx => ({});
const get_heroButtom_slot_changes = dirty => ({});
const get_heroButtom_slot_context = ctx => ({});
const get_heroTitle_slot_changes = dirty => ({});
const get_heroTitle_slot_context = ctx => ({});

// (6:39)  Creamos tu menú digital y/o catálogo de productos con                  
function fallback_block_2(ctx) {
	let t0;
	let span0;
	let t1;
	let t2;
	let span1;
	let t3;
	let t4;
	let br;
	let span2;
	let t5;
	let t6;

	const block = {
		c: function create() {
			t0 = text("Creamos tu menú digital y/o catálogo de productos con\n                 ");
			span0 = element("span");
			t1 = text("tecnología QR");
			t2 = space();
			span1 = element("span");
			t3 = text("por solo");
			t4 = space();
			br = element("br");
			span2 = element("span");
			t5 = text("$ 5000");
			t6 = text("\n                 *** SIN COSTO MENSUAL ***");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Creamos tu menú digital y/o catálogo de productos con\n                 ");
			span0 = claim_element(nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, "tecnología QR");
			span0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			span1 = claim_element(nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, "por solo");
			span1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			br = claim_element(nodes, "BR", {});
			span2 = claim_element(nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t5 = claim_text(span2_nodes, "$ 5000");
			span2_nodes.forEach(detach_dev);
			t6 = claim_text(nodes, "\n                 *** SIN COSTO MENSUAL ***");
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "text-blue-500");
			add_location(span0, file$1, 6, 17, 412);
			attr_dev(span1, "class", "underline");
			add_location(span1, file$1, 7, 17, 479);
			add_location(br, file$1, 8, 17, 538);
			attr_dev(span2, "class", "text-green-500");
			add_location(span2, file$1, 8, 22, 543);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, span0, anchor);
			append_dev(span0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, span1, anchor);
			append_dev(span1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, span2, anchor);
			append_dev(span2, t5);
			insert_dev(target, t6, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(span0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(span1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(span2);
			if (detaching) detach_dev(t6);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_2.name,
		type: "fallback",
		source: "(6:39)  Creamos tu menú digital y/o catálogo de productos con                  ",
		ctx
	});

	return block;
}

// (21:40)  Comprar
function fallback_block_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Comprar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Comprar");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_1.name,
		type: "fallback",
		source: "(21:40)  Comprar",
		ctx
	});

	return block;
}

// (27:44) *Oferta válida por 48 hs.
function fallback_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("*Oferta válida por 48 hs.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "*Oferta válida por 48 hs.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block.name,
		type: "fallback",
		source: "(27:44) *Oferta válida por 48 hs.",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div5;
	let div2;
	let div0;
	let h1;
	let t0;
	let div1;
	let img;
	let img_src_value;
	let t1;
	let div3;
	let button;
	let t2;
	let div4;
	let p;
	let current;
	const heroTitle_slot_template = /*$$slots*/ ctx[1].heroTitle;
	const heroTitle_slot = create_slot(heroTitle_slot_template, ctx, /*$$scope*/ ctx[0], get_heroTitle_slot_context);
	const heroTitle_slot_or_fallback = heroTitle_slot || fallback_block_2(ctx);
	const heroButtom_slot_template = /*$$slots*/ ctx[1].heroButtom;
	const heroButtom_slot = create_slot(heroButtom_slot_template, ctx, /*$$scope*/ ctx[0], get_heroButtom_slot_context);
	const heroButtom_slot_or_fallback = heroButtom_slot || fallback_block_1(ctx);
	const heroPharagraph_slot_template = /*$$slots*/ ctx[1].heroPharagraph;
	const heroPharagraph_slot = create_slot(heroPharagraph_slot_template, ctx, /*$$scope*/ ctx[0], get_heroPharagraph_slot_context);
	const heroPharagraph_slot_or_fallback = heroPharagraph_slot || fallback_block(ctx);

	const block = {
		c: function create() {
			div5 = element("div");
			div2 = element("div");
			div0 = element("div");
			h1 = element("h1");
			if (heroTitle_slot_or_fallback) heroTitle_slot_or_fallback.c();
			t0 = space();
			div1 = element("div");
			img = element("img");
			t1 = space();
			div3 = element("div");
			button = element("button");
			if (heroButtom_slot_or_fallback) heroButtom_slot_or_fallback.c();
			t2 = space();
			div4 = element("div");
			p = element("p");
			if (heroPharagraph_slot_or_fallback) heroPharagraph_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", {});
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			if (heroTitle_slot_or_fallback) heroTitle_slot_or_fallback.l(h1_nodes);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			button = claim_element(div3_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			if (heroButtom_slot_or_fallback) heroButtom_slot_or_fallback.l(button_nodes);
			button_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", {});
			var div4_nodes = children(div4);
			p = claim_element(div4_nodes, "P", { class: true });
			var p_nodes = children(p);
			if (heroPharagraph_slot_or_fallback) heroPharagraph_slot_or_fallback.l(p_nodes);
			p_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "font-sans-Roboto font-bold md:text-left text-center text-purple-500 text-2xl md:text-4xl mt-4 p-4 ");
			add_location(h1, file$1, 4, 12, 189);
			add_location(div0, file$1, 3, 8, 171);
			if (img.src !== (img_src_value = "menuu.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "astro");
			attr_dev(img, "width", "400");
			attr_dev(img, "height", "auto");
			add_location(img, file$1, 14, 12, 731);
			attr_dev(div1, "class", "self-center");
			add_location(div1, file$1, 13, 8, 693);
			attr_dev(div2, "class", " grid md:grid-cols-2 place-items-center p-4 mt-8 mb-8");
			add_location(div2, file$1, 2, 4, 95);
			attr_dev(button, "class", "  w-64  mt-4 mb-4  ring ring-purple-600 ring-offset-4 ring-offset-purple-100 hover:text-gray-50 transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:-translate-y-1 hover:scale-110 font-bold py-2 px-4 rounded-xl m-2");
			add_location(button, file$1, 19, 12, 888);
			attr_dev(div3, "class", "grid justify-center mt-8 mb-8");
			add_location(div3, file$1, 18, 8, 832);
			attr_dev(p, "class", " text-blue-500 font-bold text-center mt-4");
			add_location(p, file$1, 25, 12, 1299);
			add_location(div4, file$1, 24, 8, 1281);
			attr_dev(div5, "class", " gap-4 ml-8 mr-8 mb-10 mt-1 grid-cols-1 rounded-bl shadow-lg bg-gray-100");
			add_location(div5, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div2);
			append_dev(div2, div0);
			append_dev(div0, h1);

			if (heroTitle_slot_or_fallback) {
				heroTitle_slot_or_fallback.m(h1, null);
			}

			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div5, t1);
			append_dev(div5, div3);
			append_dev(div3, button);

			if (heroButtom_slot_or_fallback) {
				heroButtom_slot_or_fallback.m(button, null);
			}

			append_dev(div5, t2);
			append_dev(div5, div4);
			append_dev(div4, p);

			if (heroPharagraph_slot_or_fallback) {
				heroPharagraph_slot_or_fallback.m(p, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (heroTitle_slot) {
				if (heroTitle_slot.p && dirty & /*$$scope*/ 1) {
					heroTitle_slot.p(get_slot_context(heroTitle_slot_template, ctx, /*$$scope*/ ctx[0], get_heroTitle_slot_context), get_slot_changes(heroTitle_slot_template, /*$$scope*/ ctx[0], dirty, get_heroTitle_slot_changes));
				}
			}

			if (heroButtom_slot) {
				if (heroButtom_slot.p && dirty & /*$$scope*/ 1) {
					heroButtom_slot.p(get_slot_context(heroButtom_slot_template, ctx, /*$$scope*/ ctx[0], get_heroButtom_slot_context), get_slot_changes(heroButtom_slot_template, /*$$scope*/ ctx[0], dirty, get_heroButtom_slot_changes));
				}
			}

			if (heroPharagraph_slot) {
				if (heroPharagraph_slot.p && dirty & /*$$scope*/ 1) {
					heroPharagraph_slot.p(get_slot_context(heroPharagraph_slot_template, ctx, /*$$scope*/ ctx[0], get_heroPharagraph_slot_context), get_slot_changes(heroPharagraph_slot_template, /*$$scope*/ ctx[0], dirty, get_heroPharagraph_slot_changes));
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(heroTitle_slot_or_fallback, local);
			transition_in(heroButtom_slot_or_fallback, local);
			transition_in(heroPharagraph_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(heroTitle_slot_or_fallback, local);
			transition_out(heroButtom_slot_or_fallback, local);
			transition_out(heroPharagraph_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			if (heroTitle_slot_or_fallback) heroTitle_slot_or_fallback.d(detaching);
			if (heroButtom_slot_or_fallback) heroButtom_slot_or_fallback.d(detaching);
			if (heroPharagraph_slot_or_fallback) heroPharagraph_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Hero", $$slots, ['heroTitle','heroButtom','heroPharagraph']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, $$slots];
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Hero",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/carta/Feature.svelte generated by Svelte v3.22.2 */

const file$2 = "src/components/carta/Feature.svelte";
const get_featureContent_slot_changes = dirty => ({});
const get_featureContent_slot_context = ctx => ({});
const get_featureIcon_slot_changes = dirty => ({});
const get_featureIcon_slot_context = ctx => ({});

// (4:33) aquí va un ícono
function fallback_block_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("aquí va un ícono");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "aquí va un ícono");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_1$1.name,
		type: "fallback",
		source: "(4:33) aquí va un ícono",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	const featureIcon_slot_template = /*$$slots*/ ctx[1].featureIcon;
	const featureIcon_slot = create_slot(featureIcon_slot_template, ctx, /*$$scope*/ ctx[0], get_featureIcon_slot_context);
	const featureIcon_slot_or_fallback = featureIcon_slot || fallback_block_1$1(ctx);
	const featureContent_slot_template = /*$$slots*/ ctx[1].featureContent;
	const featureContent_slot = create_slot(featureContent_slot_template, ctx, /*$$scope*/ ctx[0], get_featureContent_slot_context);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			if (featureIcon_slot_or_fallback) featureIcon_slot_or_fallback.c();
			t = space();
			div1 = element("div");
			if (featureContent_slot) featureContent_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (featureIcon_slot_or_fallback) featureIcon_slot_or_fallback.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (featureContent_slot) featureContent_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mb-8 self-center");
			add_location(div0, file$2, 2, 4, 82);
			attr_dev(div1, "class", "text-gray-600 font-bold col-span-3 self-center p-8 ");
			add_location(div1, file$2, 6, 4, 186);
			attr_dev(div2, "class", "grid grid-cols-1 md:grid-cols-4 place-items-center rounded-bl ");
			add_location(div2, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);

			if (featureIcon_slot_or_fallback) {
				featureIcon_slot_or_fallback.m(div0, null);
			}

			append_dev(div2, t);
			append_dev(div2, div1);

			if (featureContent_slot) {
				featureContent_slot.m(div1, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (featureIcon_slot) {
				if (featureIcon_slot.p && dirty & /*$$scope*/ 1) {
					featureIcon_slot.p(get_slot_context(featureIcon_slot_template, ctx, /*$$scope*/ ctx[0], get_featureIcon_slot_context), get_slot_changes(featureIcon_slot_template, /*$$scope*/ ctx[0], dirty, get_featureIcon_slot_changes));
				}
			}

			if (featureContent_slot) {
				if (featureContent_slot.p && dirty & /*$$scope*/ 1) {
					featureContent_slot.p(get_slot_context(featureContent_slot_template, ctx, /*$$scope*/ ctx[0], get_featureContent_slot_context), get_slot_changes(featureContent_slot_template, /*$$scope*/ ctx[0], dirty, get_featureContent_slot_changes));
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(featureIcon_slot_or_fallback, local);
			transition_in(featureContent_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(featureIcon_slot_or_fallback, local);
			transition_out(featureContent_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (featureIcon_slot_or_fallback) featureIcon_slot_or_fallback.d(detaching);
			if (featureContent_slot) featureContent_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Feature> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Feature", $$slots, ['featureIcon','featureContent']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, $$slots];
}

class Feature extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Feature",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/components/carta/Features.svelte generated by Svelte v3.22.2 */
const file$3 = "src/components/carta/Features.svelte";

// (16:12) <span slot="featureContent">
function create_featureContent_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("La complicada crisis sanitaria que estamos atravesando hace\n                que tu comercio reduzca la cantidad de personas dentro de un local, limite también las interacciones\n                 con cartas, folletos o documentos en papel. Nuestra solución permite\n                 que mientras tus clientes esperan ser atendidos, puedan interactuar digitalmente con tus productos o servicios\n                 en una interfaz rápida  intuitiva con enormes posibilidades de fidelización y retargeting.");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "La complicada crisis sanitaria que estamos atravesando hace\n                que tu comercio reduzca la cantidad de personas dentro de un local, limite también las interacciones\n                 con cartas, folletos o documentos en papel. Nuestra solución permite\n                 que mientras tus clientes esperan ser atendidos, puedan interactuar digitalmente con tus productos o servicios\n                 en una interfaz rápida  intuitiva con enormes posibilidades de fidelización y retargeting.");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "featureContent");
			add_location(span, file$3, 15, 12, 543);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_featureContent_slot.name,
		type: "slot",
		source: "(16:12) <span slot=\\\"featureContent\\\">",
		ctx
	});

	return block;
}

// (22:12) <span slot="featureIcon">
function create_featureIcon_slot(ctx) {
	let span;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			span = element("span");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);

			img = claim_element(span_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "qrscan.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "caja");
			attr_dev(img, "width", "200");
			attr_dev(img, "height", "auto");
			add_location(img, file$3, 21, 38, 1128);
			attr_dev(span, "slot", "featureIcon");
			add_location(span, file$3, 21, 12, 1102);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_featureIcon_slot.name,
		type: "slot",
		source: "(22:12) <span slot=\\\"featureIcon\\\">",
		ctx
	});

	return block;
}

// (14:8) <Feature>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = space();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(14:8) <Feature>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div2;
	let div0;
	let h2;
	let span;
	let t0;
	let t1;
	let br;
	let t2;
	let t3;
	let div1;
	let current;

	const feature = new Feature({
			props: {
				$$slots: {
					default: [create_default_slot],
					featureIcon: [create_featureIcon_slot],
					featureContent: [create_featureContent_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			h2 = element("h2");
			span = element("span");
			t0 = text("NO PIERDAS MAS VENTAS...");
			t1 = space();
			br = element("br");
			t2 = text("\n            El mundo cabe en un QR, todos tus productos o servicios listos para scanearlos y compartirlos donde quieras y como quieras.");
			t3 = space();
			div1 = element("div");
			create_component(feature.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			span = claim_element(h2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "NO PIERDAS MAS VENTAS...");
			span_nodes.forEach(detach_dev);
			t1 = claim_space(h2_nodes);
			br = claim_element(h2_nodes, "BR", {});
			t2 = claim_text(h2_nodes, "\n            El mundo cabe en un QR, todos tus productos o servicios listos para scanearlos y compartirlos donde quieras y como quieras.");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(feature.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "text-green-500");
			add_location(span, file$3, 7, 12, 224);
			add_location(br, file$3, 8, 12, 297);
			attr_dev(h2, "class", "text-blue-600 font-bold font-size-lg text-2xl mb-4");
			add_location(h2, file$3, 6, 8, 148);
			attr_dev(div0, "class", "grid place-items-center m-8 p-4 ");
			add_location(div0, file$3, 5, 4, 93);
			attr_dev(div1, "class", "grid self-center");
			add_location(div1, file$3, 12, 4, 469);
			attr_dev(div2, "class", "shadow-lg ");
			add_location(div2, file$3, 4, 0, 64);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, h2);
			append_dev(h2, span);
			append_dev(span, t0);
			append_dev(h2, t1);
			append_dev(h2, br);
			append_dev(h2, t2);
			append_dev(div2, t3);
			append_dev(div2, div1);
			mount_component(feature, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const feature_changes = {};

			if (dirty & /*$$scope*/ 1) {
				feature_changes.$$scope = { dirty, ctx };
			}

			feature.$set(feature_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(feature.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(feature.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(feature);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Features> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Features", $$slots, []);
	$$self.$capture_state = () => ({ Feature });
	return [];
}

class Features extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Features",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/carta.svelte generated by Svelte v3.22.2 */

function create_fragment$4(ctx) {
	let t0;
	let t1;
	let t2;
	let current;
	const hero = new Hero({ $$inline: true });
	const features = new Features({ $$inline: true });
	const whatsapp = new Whatsapp({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(hero.$$.fragment);
			t1 = space();
			create_component(features.$$.fragment);
			t2 = space();
			create_component(whatsapp.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v57o8a\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(hero.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(features.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(whatsapp.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Oferta página web";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(hero, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(features, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(whatsapp, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const hero_changes = {};

			if (dirty & /*$$scope*/ 1) {
				hero_changes.$$scope = { dirty, ctx };
			}

			hero.$set(hero_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);
			transition_in(features.$$.fragment, local);
			transition_in(whatsapp.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(features.$$.fragment, local);
			transition_out(whatsapp.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(hero, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(features, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(whatsapp, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Carta> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Carta", $$slots, []);
	$$self.$capture_state = () => ({ Whatsapp, Hero, Features });
	return [];
}

class Carta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Carta",
			options,
			id: create_fragment$4.name
		});
	}
}

export default Carta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydGEuNTZmNjQ0NjguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
