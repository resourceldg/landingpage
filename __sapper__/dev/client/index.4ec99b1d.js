import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.2e71a3a8.js';

/* src/components/Hero.svelte generated by Svelte v3.22.2 */

const file = "src/components/Hero.svelte";

function create_fragment(ctx) {
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
			add_location(br0, file, 6, 27, 255);
			attr_dev(span0, "class", "underline");
			add_location(span0, file, 6, 31, 259);
			add_location(br1, file, 7, 12, 312);
			attr_dev(span1, "class", "text-green-500");
			add_location(span1, file, 7, 16, 316);
			attr_dev(h1, "class", "font-sans-Roboto font-bold text-center text-purple-500 text-4xl md:text-6xl mt-4 ");
			add_location(h1, file, 4, 8, 121);
			attr_dev(p, "class", " text-red-500 text-center");
			add_location(p, file, 9, 8, 388);
			attr_dev(button, "class", "  w-64  mt-4 mb-4  ring ring-purple-600 ring-offset-4 ring-offset-purple-100 hover:text-gray-50 transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:-translate-y-1 hover:scale-110 font-bold py-2 px-4 rounded-xl m-2");
			add_location(button, file, 11, 8, 516);
			attr_dev(div0, "class", "grid justify-center mt-8 mb-8");
			add_location(div0, file, 10, 8, 462);
			attr_dev(div1, "class", " mb-8");
			add_location(div1, file, 3, 4, 93);
			attr_dev(div2, "class", " gap-4 ml-8 mr-8 mb-10 mt-4 grid-cols-1 rounded-bl shadow-lg bg-gray-100");
			add_location(div2, file, 2, 0, 2);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Hero", $$slots, []);
	return [];
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Hero",
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
	let h2;
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
			h2 = element("h2");
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
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			span = claim_element(h2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Hey emprendedor!!!");
			span_nodes.forEach(detach_dev);
			t1 = claim_space(h2_nodes);
			br = claim_element(h2_nodes, "BR", {});
			t2 = claim_text(h2_nodes, "Con esta Web tendrás email corporativo, Whatsapp integrado, si\n            estás buscando una tienda en linea revisá debajo el plan que mejor se\n            adapte a tus necesidades o hacé clíck en el logo y escibirnos...");
			h2_nodes.forEach(detach_dev);
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
			attr_dev(span, "class", "font-bold");
			add_location(span, file$1, 16, 12, 344);
			add_location(br, file$1, 17, 12, 406);
			add_location(h2, file$1, 15, 8, 327);
			attr_dev(div0, "class", "p-4 col-span-2");
			add_location(div0, file$1, 14, 4, 289);
			attr_dev(img, "class", "wsp  svelte-vnq8fq");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file$1, 23, 8, 714);
			attr_dev(div1, "class", "grid col-start-3 col-span-1 ");
			add_location(div1, file$1, 22, 4, 663);
			attr_dev(div2, "class", "grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl");
			add_location(div2, file$1, 13, 0, 186);
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

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Whatsapp> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Whatsapp", $$slots, []);
	$$self.$capture_state = () => ({ Hero });
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

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let t1;
	let t2;
	let div;
	let t3;
	let current;
	const hero = new Hero({ $$inline: true });
	const whatsapp = new Whatsapp({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(hero.$$.fragment);
			t1 = space();
			create_component(whatsapp.$$.fragment);
			t2 = space();
			div = element("div");
			t3 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
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
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			t3 = claim_text(div_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Oferta página web";
			add_location(div, file$2, 13, 0, 217);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(hero, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(whatsapp, target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, t3);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);
			transition_in(whatsapp.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(whatsapp.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(hero, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(whatsapp, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Whatsapp, Hero });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGVjOTliMWQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
