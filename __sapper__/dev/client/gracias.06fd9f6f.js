import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, c as create_slot, u as create_component, w as claim_component, x as mount_component, q as transition_in, r as transition_out, y as destroy_component, e as element, t as text, a as space, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as get_slot_context, p as get_slot_changes } from './client.09e717a5.js';
import { W as Whatsapp } from './Whatsapp.8defb9b4.js';

/* src/routes/gracias.svelte generated by Svelte v3.22.2 */
const file = "src/routes/gracias.svelte";
const get_default_slot_changes_1 = dirty => ({});
const get_default_slot_context_1 = ctx => ({ prop: "img_wsp" });
const get_default_slot_changes = dirty => ({});
const get_default_slot_context = ctx => ({ prop: "text_wsp" });

// (6:28)          
function fallback_block_1(ctx) {
	let h3;
	let span0;
	let t0;
	let t1;
	let br0;
	let t2;
	let span1;
	let t3;
	let br1;
	let t4;

	const block = {
		c: function create() {
			h3 = element("h3");
			span0 = element("span");
			t0 = text("GRACIAS POR CONTRATARNOS");
			t1 = space();
			br0 = element("br");
			t2 = text("Muy pronto  podrás tener tu catálogo de serivicos o productos listo.\n           Para comenzar prepará el logo de tu empresa en formato SVG. Envianos tu catálogo o menú\n           a la casilla de correo soporte@sofweel.com o\n            ");
			span1 = element("span");
			t3 = space();
			br1 = element("br");
			t4 = text("\n           Avisanos por wsp... hacé click en el logo y escibinos...");
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			span0 = claim_element(h3_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "GRACIAS POR CONTRATARNOS");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(h3_nodes);
			br0 = claim_element(h3_nodes, "BR", {});
			t2 = claim_text(h3_nodes, "Muy pronto  podrás tener tu catálogo de serivicos o productos listo.\n           Para comenzar prepará el logo de tu empresa en formato SVG. Envianos tu catálogo o menú\n           a la casilla de correo soporte@sofweel.com o\n            ");
			span1 = claim_element(h3_nodes, "SPAN", { class: true });
			children(span1).forEach(detach_dev);
			t3 = claim_space(h3_nodes);
			br1 = claim_element(h3_nodes, "BR", {});
			t4 = claim_text(h3_nodes, "\n           Avisanos por wsp... hacé click en el logo y escibinos...");
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "font-bold text-2xl  ");
			add_location(span0, file, 7, 12, 178);
			add_location(br0, file, 8, 12, 257);
			attr_dev(span1, "class", "font-bold");
			add_location(span1, file, 11, 12, 499);
			add_location(br1, file, 11, 44, 531);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 6, 8, 131);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);
			append_dev(h3, span0);
			append_dev(span0, t0);
			append_dev(h3, t1);
			append_dev(h3, br0);
			append_dev(h3, t2);
			append_dev(h3, span1);
			append_dev(h3, t3);
			append_dev(h3, br1);
			append_dev(h3, t4);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_1.name,
		type: "fallback",
		source: "(6:28)          ",
		ctx
	});

	return block;
}

// (17:27)          
function fallback_block(ctx) {
	let a;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { class: true, src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "wsp object-fill");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file, 17, 42, 701);
			attr_dev(a, "href", "https://wa.link/oufie2");
			add_location(a, file, 17, 8, 667);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block.name,
		type: "fallback",
		source: "(17:27)          ",
		ctx
	});

	return block;
}

// (5:0) <Whatsapp>
function create_default_slot(ctx) {
	let t;
	let current;
	const default_slot_template = /*$$slots*/ ctx[0].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], get_default_slot_context);
	const default_slot_or_fallback = default_slot || fallback_block_1(ctx);
	const default_slot_template_1 = /*$$slots*/ ctx[0].default;
	const default_slot_1 = create_slot(default_slot_template_1, ctx, /*$$scope*/ ctx[1], get_default_slot_context_1);
	const default_slot_or_fallback_1 = default_slot_1 || fallback_block(ctx);

	const block = {
		c: function create() {
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			t = space();
			if (default_slot_or_fallback_1) default_slot_or_fallback_1.c();
		},
		l: function claim(nodes) {
			if (default_slot_or_fallback) default_slot_or_fallback.l(nodes);
			t = claim_space(nodes);
			if (default_slot_or_fallback_1) default_slot_or_fallback_1.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(target, anchor);
			}

			insert_dev(target, t, anchor);

			if (default_slot_or_fallback_1) {
				default_slot_or_fallback_1.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2) {
					default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], get_default_slot_context), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, get_default_slot_changes));
				}
			}

			if (default_slot_1) {
				if (default_slot_1.p && dirty & /*$$scope*/ 2) {
					default_slot_1.p(get_slot_context(default_slot_template_1, ctx, /*$$scope*/ ctx[1], get_default_slot_context_1), get_slot_changes(default_slot_template_1, /*$$scope*/ ctx[1], dirty, get_default_slot_changes_1));
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			transition_in(default_slot_or_fallback_1, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot_or_fallback, local);
			transition_out(default_slot_or_fallback_1, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			if (detaching) detach_dev(t);
			if (default_slot_or_fallback_1) default_slot_or_fallback_1.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(5:0) <Whatsapp>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current;

	const whatsapp = new Whatsapp({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(whatsapp.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(whatsapp.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(whatsapp, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const whatsapp_changes = {};

			if (dirty & /*$$scope*/ 2) {
				whatsapp_changes.$$scope = { dirty, ctx };
			}

			whatsapp.$set(whatsapp_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(whatsapp.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(whatsapp.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(whatsapp, detaching);
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

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Gracias> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Gracias", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ Whatsapp });
	return [$$slots, $$scope];
}

class Gracias extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Gracias",
			options,
			id: create_fragment.name
		});
	}
}

export default Gracias;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhY2lhcy4wNmZkOWY2Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9ncmFjaWFzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgV2hhdHNhcHAgZnJvbSAnLi8uLi9jb21wb25lbnRzL2NhcnRhL1doYXRzYXBwLnN2ZWx0ZSc7XG48L3NjcmlwdD5cblxuPFdoYXRzYXBwPlxuICAgIDxzbG90IHByb3A9e1widGV4dF93c3BcIn0+XG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC0yeGwgIFwiPkdSQUNJQVMgUE9SIENPTlRSQVRBUk5PUzwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPk11eSBwcm9udG8gIHBvZHLDoXMgdGVuZXIgdHUgY2F0w6Fsb2dvIGRlIHNlcml2aWNvcyBvIHByb2R1Y3RvcyBsaXN0by5cbiAgICAgICAgICAgUGFyYSBjb21lbnphciBwcmVwYXLDoSBlbCBsb2dvIGRlIHR1IGVtcHJlc2EgZW4gZm9ybWF0byBTVkcuIEVudmlhbm9zIHR1IGNhdMOhbG9nbyBvIG1lbsO6XG4gICAgICAgICAgIGEgbGEgY2FzaWxsYSBkZSBjb3JyZW8gc29wb3J0ZUBzb2Z3ZWVsLmNvbSBvXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZFwiPjwvc3Bhbj4gPGJyPlxuICAgICAgICAgICBBdmlzYW5vcyBwb3Igd3NwLi4uIGhhY8OpIGNsaWNrIGVuIGVsIGxvZ28geSBlc2NpYmlub3MuLi5cbiAgICAgICAgPC9oMz5cblxuICAgIDwvc2xvdD5cbiAgICA8c2xvdCBwcm9wPXtcImltZ193c3BcIn0+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dhLmxpbmsvb3VmaWUyXCI+IDxpbWcgY2xhc3M9XCJ3c3Agb2JqZWN0LWZpbGxcIiBzcmM9XCJ3c3AyLnBuZ1wiIGFsdD1cImxvZ28gd2hhdHNhcHBcIiAvPjwvYT5cbiAgICA8L3Nsb3Q+XG4gICAgXG48L1doYXRzYXBwPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7bURBZ0JnQixTQUFTOztpREFYVCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
