import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, u as create_component, w as claim_component, x as mount_component, q as transition_in, r as transition_out, y as destroy_component, e as element, t as text, a as space, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, z as noop } from './client.c9fd5ddf.js';
import { W as Whatsapp } from './Whatsapp.1f689751.js';

/* src/routes/gracias.svelte generated by Svelte v3.22.2 */
const file = "src/routes/gracias.svelte";

// (6:4) <span slot="text_wsp">
function create_text_wsp_slot(ctx) {
	let span0;
	let h3;
	let span1;
	let t0;
	let t1;
	let br0;
	let t2;
	let span2;
	let t3;
	let br1;
	let t4;

	const block = {
		c: function create() {
			span0 = element("span");
			h3 = element("h3");
			span1 = element("span");
			t0 = text("GRACIAS POR CONTRATARNOS");
			t1 = space();
			br0 = element("br");
			t2 = text("Muy pronto  podrás tener tu catálogo de serivicos o productos listo.\n           Para comenzar prepará el logo de tu empresa en formato SVG. Envianos tu catálogo o menú\n           a la casilla de correo soporte@sofweel.com o\n            ");
			span2 = element("span");
			t3 = space();
			br1 = element("br");
			t4 = text("\n           Avisanos por wsp... hacé click en el logo y escibinos...");
			this.h();
		},
		l: function claim(nodes) {
			span0 = claim_element(nodes, "SPAN", { slot: true });
			var span0_nodes = children(span0);
			h3 = claim_element(span0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			span1 = claim_element(h3_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t0 = claim_text(span1_nodes, "GRACIAS POR CONTRATARNOS");
			span1_nodes.forEach(detach_dev);
			t1 = claim_space(h3_nodes);
			br0 = claim_element(h3_nodes, "BR", {});
			t2 = claim_text(h3_nodes, "Muy pronto  podrás tener tu catálogo de serivicos o productos listo.\n           Para comenzar prepará el logo de tu empresa en formato SVG. Envianos tu catálogo o menú\n           a la casilla de correo soporte@sofweel.com o\n            ");
			span2 = claim_element(h3_nodes, "SPAN", { class: true });
			children(span2).forEach(detach_dev);
			t3 = claim_space(h3_nodes);
			br1 = claim_element(h3_nodes, "BR", {});
			t4 = claim_text(h3_nodes, "\n           Avisanos por wsp... hacé click en el logo y escibinos...");
			h3_nodes.forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span1, "class", "font-bold text-2xl  ");
			add_location(span1, file, 7, 12, 176);
			add_location(br0, file, 8, 12, 255);
			attr_dev(span2, "class", "font-bold");
			add_location(span2, file, 11, 12, 497);
			add_location(br1, file, 11, 44, 529);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 6, 8, 129);
			attr_dev(span0, "slot", "text_wsp");
			add_location(span0, file, 5, 4, 98);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span0, anchor);
			append_dev(span0, h3);
			append_dev(h3, span1);
			append_dev(span1, t0);
			append_dev(h3, t1);
			append_dev(h3, br0);
			append_dev(h3, t2);
			append_dev(h3, span2);
			append_dev(h3, t3);
			append_dev(h3, br1);
			append_dev(h3, t4);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span0);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_text_wsp_slot.name,
		type: "slot",
		source: "(6:4) <span slot=\\\"text_wsp\\\">",
		ctx
	});

	return block;
}

// (17:4) <span slot="img_wsp">
function create_img_wsp_slot(ctx) {
	let span;
	let a;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			span = element("span");
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			a = claim_element(span_nodes, "A", { href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { class: true, src: true, alt: true });
			a_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "wsp object-fill");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file, 17, 42, 697);
			attr_dev(a, "href", "https://wa.link/oufie2");
			add_location(a, file, 17, 8, 663);
			attr_dev(span, "slot", "img_wsp");
			add_location(span, file, 16, 4, 633);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, a);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_img_wsp_slot.name,
		type: "slot",
		source: "(17:4) <span slot=\\\"img_wsp\\\">",
		ctx
	});

	return block;
}

// (5:0) <Whatsapp>
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
		source: "(5:0) <Whatsapp>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current;

	const whatsapp = new Whatsapp({
			props: {
				$$slots: {
					default: [create_default_slot],
					img_wsp: [create_img_wsp_slot],
					text_wsp: [create_text_wsp_slot]
				},
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

			if (dirty & /*$$scope*/ 1) {
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
	validate_slots("Gracias", $$slots, []);
	$$self.$capture_state = () => ({ Whatsapp });
	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhY2lhcy5iODZkZmYyYi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9