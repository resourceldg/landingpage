import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.3055f2e5.js';

/* src/components/Cards.svelte generated by Svelte v3.22.2 */

const file = "src/components/Cards.svelte";

function create_fragment(ctx) {
	let div12;
	let div3;
	let div2;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let div1;
	let h20;
	let t1;
	let t2;
	let div7;
	let div6;
	let div4;
	let img1;
	let img1_src_value;
	let t3;
	let div5;
	let h21;
	let t4;
	let t5;
	let div11;
	let div10;
	let div8;
	let img2;
	let img2_src_value;
	let t6;
	let div9;
	let h22;
	let t7;

	const block = {
		c: function create() {
			div12 = element("div");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div1 = element("div");
			h20 = element("h2");
			t1 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			img1 = element("img");
			t3 = space();
			div5 = element("div");
			h21 = element("h2");
			t4 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			img2 = element("img");
			t6 = space();
			div9 = element("div");
			h22 = element("h2");
			t7 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			this.h();
		},
		l: function claim(nodes) {
			div12 = claim_element(nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div3 = claim_element(div12_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", {});
			var div0_nodes = children(div0);

			img0 = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			h20 = claim_element(div1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			h20_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(div12_nodes);
			div7 = claim_element(div12_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div4 = claim_element(div6_nodes, "DIV", {});
			var div4_nodes = children(div4);

			img1 = claim_element(div4_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div4_nodes.forEach(detach_dev);
			t3 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", {});
			var div5_nodes = children(div5);
			h21 = claim_element(div5_nodes, "H2", {});
			var h21_nodes = children(h21);
			t4 = claim_text(h21_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			h21_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t5 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div8 = claim_element(div10_nodes, "DIV", {});
			var div8_nodes = children(div8);

			img2 = claim_element(div8_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div8_nodes.forEach(detach_dev);
			t6 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", {});
			var div9_nodes = children(div9);
			h22 = claim_element(div9_nodes, "H2", {});
			var h22_nodes = children(h22);
			t7 = claim_text(h22_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
			h22_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "lightbulb-regular.svg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "caja");
			attr_dev(img0, "width", "50");
			attr_dev(img0, "height", "50");
			add_location(img0, file, 5, 16, 257);
			add_location(div0, file, 4, 12, 235);
			add_location(h20, file, 13, 16, 445);
			add_location(div1, file, 12, 12, 423);
			attr_dev(div2, "class", "grid  grid-rows-2 gap-4 m-4 p-4 bg-blue-400 place-items-center ");
			add_location(div2, file, 3, 8, 145);
			attr_dev(div3, "class", "place-items-center");
			add_location(div3, file, 2, 4, 104);
			if (img1.src !== (img1_src_value = "lightbulb-regular.svg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "caja");
			attr_dev(img1, "width", "50");
			attr_dev(img1, "height", "50");
			add_location(img1, file, 22, 16, 735);
			add_location(div4, file, 21, 12, 713);
			add_location(h21, file, 30, 16, 923);
			add_location(div5, file, 29, 12, 901);
			attr_dev(div6, "class", "grid  grid-rows-2 gap-4 m-4 p-4 bg-blue-400 place-items-center ");
			add_location(div6, file, 20, 8, 623);
			attr_dev(div7, "class", "place-items-center");
			add_location(div7, file, 19, 4, 582);
			if (img2.src !== (img2_src_value = "lightbulb-regular.svg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "caja");
			attr_dev(img2, "width", "50");
			attr_dev(img2, "height", "50");
			add_location(img2, file, 39, 16, 1213);
			add_location(div8, file, 38, 12, 1191);
			add_location(h22, file, 47, 16, 1401);
			add_location(div9, file, 46, 12, 1379);
			attr_dev(div10, "class", "grid  grid-rows-2 gap-4 m-4 p-4 bg-blue-400 place-items-center ");
			add_location(div10, file, 37, 8, 1101);
			attr_dev(div11, "class", "place-items-center");
			add_location(div11, file, 36, 4, 1060);
			attr_dev(div12, "class", "grid md:grid-cols-3 gap-4 rounded-bl place-items-center m-4 rounded-3xl shadow-lg");
			add_location(div12, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div12, anchor);
			append_dev(div12, div3);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, img0);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, h20);
			append_dev(h20, t1);
			append_dev(div12, t2);
			append_dev(div12, div7);
			append_dev(div7, div6);
			append_dev(div6, div4);
			append_dev(div4, img1);
			append_dev(div6, t3);
			append_dev(div6, div5);
			append_dev(div5, h21);
			append_dev(h21, t4);
			append_dev(div12, t5);
			append_dev(div12, div11);
			append_dev(div11, div10);
			append_dev(div10, div8);
			append_dev(div8, img2);
			append_dev(div10, t6);
			append_dev(div10, div9);
			append_dev(div9, h22);
			append_dev(h22, t7);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div12);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cards> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Cards", $$slots, []);
	return [];
}

class Cards extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cards",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/Whatsapp.svelte generated by Svelte v3.22.2 */

const file$1 = "src/components/Whatsapp.svelte";

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let h3;
	let span;
	let t0;
	let t1;
	let br;
	let t2;
	let t3;
	let div1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			h3 = element("h3");
			span = element("span");
			t0 = text("Hey emprendedor!!!");
			t1 = space();
			br = element("br");
			t2 = text("Con esta Web tendrás email corporativo, Whatsapp integrado, si\n            estás buscando una tienda en linea revisá debajo el plan que mejor se\n            adapte a tus necesidades o hacé clíck en el logo y escibirnos...");
			t3 = space();
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
			span = claim_element(h3_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Hey emprendedor!!!");
			span_nodes.forEach(detach_dev);
			t1 = claim_space(h3_nodes);
			br = claim_element(h3_nodes, "BR", {});
			t2 = claim_text(h3_nodes, "Con esta Web tendrás email corporativo, Whatsapp integrado, si\n            estás buscando una tienda en linea revisá debajo el plan que mejor se\n            adapte a tus necesidades o hacé clíck en el logo y escibirnos...");
			h3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "font-bold text-sm ");
			add_location(span, file$1, 12, 12, 302);
			add_location(br, file$1, 13, 12, 373);
			attr_dev(h3, "class", "text-sm");
			add_location(h3, file$1, 11, 8, 269);
			attr_dev(div0, "class", "p-4 col-span-2");
			add_location(div0, file$1, 10, 4, 231);
			attr_dev(img, "class", "wsp object-none svelte-vnq8fq");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file$1, 19, 8, 685);
			attr_dev(div1, "class", "grid col-start-3 col-span-1 mr-2");
			add_location(div1, file$1, 18, 4, 630);
			attr_dev(div2, "class", "grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl");
			add_location(div2, file$1, 9, 0, 128);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, h3);
			append_dev(h3, span);
			append_dev(span, t0);
			append_dev(h3, t1);
			append_dev(h3, br);
			append_dev(h3, t2);
			append_dev(div2, t3);
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
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
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Whatsapp",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/Hero.svelte generated by Svelte v3.22.2 */

const file$2 = "src/components/Hero.svelte";

function create_fragment$2(ctx) {
	let div2;
	let div1;
	let h1;
	let t0;
	let br0;
	let span0;
	let t1;
	let t2;
	let br1;
	let span1;
	let t3;
	let t4;
	let t5;
	let p;
	let t6;
	let t7;
	let div0;
	let button;
	let t8;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			h1 = element("h1");
			t0 = text("Tu página web hoy ");
			br0 = element("br");
			span0 = element("span");
			t1 = text("POR SOLO");
			t2 = space();
			br1 = element("br");
			span1 = element("span");
			t3 = text("$ 500.00 ");
			t4 = text("/mes");
			t5 = space();
			p = element("p");
			t6 = text("*Oferta válida por 48 hs");
			t7 = space();
			div0 = element("div");
			button = element("button");
			t8 = text("Comprar");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Tu página web hoy ");
			br0 = claim_element(h1_nodes, "BR", {});
			span0 = claim_element(h1_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, "POR SOLO");
			span0_nodes.forEach(detach_dev);
			t2 = claim_space(h1_nodes);
			br1 = claim_element(h1_nodes, "BR", {});
			span1 = claim_element(h1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, "$ 500.00 ");
			span1_nodes.forEach(detach_dev);
			t4 = claim_text(h1_nodes, "/mes");
			h1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "*Oferta válida por 48 hs");
			p_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Comprar");
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(br0, file$2, 6, 27, 255);
			attr_dev(span0, "class", "underline");
			add_location(span0, file$2, 6, 31, 259);
			add_location(br1, file$2, 7, 12, 312);
			attr_dev(span1, "class", "text-green-500");
			add_location(span1, file$2, 7, 16, 316);
			attr_dev(h1, "class", "font-sans-Roboto font-bold text-center text-purple-500 text-4xl md:text-6xl mt-4 ");
			add_location(h1, file$2, 4, 8, 121);
			attr_dev(p, "class", " text-red-500 text-center");
			add_location(p, file$2, 9, 8, 388);
			attr_dev(button, "class", "  w-64  mt-4 mb-4  ring ring-purple-600 ring-offset-4 ring-offset-purple-100 hover:text-gray-50 transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:-translate-y-1 hover:scale-110 font-bold py-2 px-4 rounded-xl m-2");
			add_location(button, file$2, 11, 8, 516);
			attr_dev(div0, "class", "grid justify-center mt-8 mb-8");
			add_location(div0, file$2, 10, 8, 462);
			attr_dev(div1, "class", " mb-8");
			add_location(div1, file$2, 3, 4, 93);
			attr_dev(div2, "class", " gap-4 ml-8 mr-8 mb-10 mt-4 grid-cols-1 rounded-bl shadow-lg bg-gray-100");
			add_location(div2, file$2, 2, 0, 2);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, h1);
			append_dev(h1, t0);
			append_dev(h1, br0);
			append_dev(h1, span0);
			append_dev(span0, t1);
			append_dev(h1, t2);
			append_dev(h1, br1);
			append_dev(h1, span1);
			append_dev(span1, t3);
			append_dev(h1, t4);
			append_dev(div1, t5);
			append_dev(div1, p);
			append_dev(p, t6);
			append_dev(div1, t7);
			append_dev(div1, div0);
			append_dev(div0, button);
			append_dev(button, t8);
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
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Hero", $$slots, []);
	return [];
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Hero",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.22.2 */

function create_fragment$3(ctx) {
	let t0;
	let t1;
	let t2;
	let current;
	const hero = new Hero({ $$inline: true });
	const whatsapp = new Whatsapp({ $$inline: true });
	const cards = new Cards({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(hero.$$.fragment);
			t1 = space();
			create_component(whatsapp.$$.fragment);
			t2 = space();
			create_component(cards.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v57o8a\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(hero.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(whatsapp.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(cards.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Oferta página web";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(hero, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(whatsapp, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(cards, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);
			transition_in(whatsapp.$$.fragment, local);
			transition_in(cards.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(whatsapp.$$.fragment, local);
			transition_out(cards.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(hero, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(whatsapp, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(cards, detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Cards, Whatsapp, Hero });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$3.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjE4NjQwYjUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
