import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, u as create_component, b as claim_element, f as children, h as detach_dev, j as claim_space, w as claim_component, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, x as mount_component, q as transition_in, r as transition_out, y as destroy_component, t as text, g as claim_text, z as noop } from './client.d0f3165d.js';
import { W as Whatsapp } from './Whatsapp.097efaa6.js';

/* src/routes/gracias.svelte generated by Svelte v3.22.2 */
const file = "src/routes/gracias.svelte";

// (10:12) <span slot="text_wsp">
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
			t2 = text("Para comenzar mandanos un email a soporte@softweel.com o ");
			span2 = element("span");
			t3 = space();
			br1 = element("br");
			t4 = text("\n                avisanos por wsp... hacé click en el logo y escibinos...");
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
			t2 = claim_text(h3_nodes, "Para comenzar mandanos un email a soporte@softweel.com o ");
			span2 = claim_element(h3_nodes, "SPAN", { class: true });
			children(span2).forEach(detach_dev);
			t3 = claim_space(h3_nodes);
			br1 = claim_element(h3_nodes, "BR", {});
			t4 = claim_text(h3_nodes, "\n                avisanos por wsp... hacé click en el logo y escibinos...");
			h3_nodes.forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span1, "class", "font-bold text-lg  ");
			add_location(span1, file, 11, 20, 382);
			add_location(br0, file, 12, 20, 468);
			attr_dev(span2, "class", "font-bold");
			add_location(span2, file, 12, 83, 531);
			add_location(br1, file, 12, 115, 563);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 10, 16, 327);
			attr_dev(span0, "slot", "text_wsp");
			add_location(span0, file, 9, 12, 288);
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
		source: "(10:12) <span slot=\\\"text_wsp\\\">",
		ctx
	});

	return block;
}

// (18:12) <span slot="img_wsp">
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
			add_location(img, file, 18, 50, 776);
			attr_dev(a, "href", "https://wa.link/oufie2");
			add_location(a, file, 18, 16, 742);
			attr_dev(span, "slot", "img_wsp");
			add_location(span, file, 17, 12, 704);
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
		source: "(18:12) <span slot=\\\"img_wsp\\\">",
		ctx
	});

	return block;
}

// (9:8) <Whatsapp>
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
		source: "(9:8) <Whatsapp>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let img;
	let img_src_value;
	let t;
	let div1;
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
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t = space();
			div1 = element("div");
			create_component(whatsapp.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", {});
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div0_nodes.forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(whatsapp.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "justify-center");
			if (img.src !== (img_src_value = "sloth.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "osito durmiendo");
			attr_dev(img, "width", "400");
			attr_dev(img, "height", "auto");
			add_location(img, file, 5, 8, 146);
			add_location(div0, file, 4, 4, 132);
			add_location(div1, file, 7, 4, 251);
			attr_dev(div2, "class", "grid grid-cols-1 content-center");
			add_location(div2, file, 3, 0, 82);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, img);
			append_dev(div2, t);
			append_dev(div2, div1);
			mount_component(whatsapp, div1, null);
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
			if (detaching) detach_dev(div2);
			destroy_component(whatsapp);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhY2lhcy44ZGFmNjY5Yi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=