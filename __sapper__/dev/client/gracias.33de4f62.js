import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, u as create_component, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, w as claim_component, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, x as mount_component, q as transition_in, r as transition_out, y as destroy_component, z as noop } from './client.ace66e5c.js';
import { W as Whatsapp } from './Whatsapp.18c611ab.js';

/* src/routes/gracias.svelte generated by Svelte v3.22.2 */
const file = "src/routes/gracias.svelte";

// (13:12) <span slot="text_wsp">
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
			add_location(span1, file, 14, 20, 554);
			add_location(br0, file, 15, 20, 640);
			attr_dev(span2, "class", "font-bold");
			add_location(span2, file, 15, 83, 703);
			add_location(br1, file, 15, 115, 735);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 13, 16, 499);
			attr_dev(span0, "slot", "text_wsp");
			add_location(span0, file, 12, 12, 460);
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
		source: "(13:12) <span slot=\\\"text_wsp\\\">",
		ctx
	});

	return block;
}

// (21:12) <span slot="img_wsp">
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
			add_location(img, file, 21, 50, 948);
			attr_dev(a, "href", "https://wa.link/oufie2");
			add_location(a, file, 21, 16, 914);
			attr_dev(span, "slot", "img_wsp");
			add_location(span, file, 20, 12, 876);
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
		source: "(21:12) <span slot=\\\"img_wsp\\\">",
		ctx
	});

	return block;
}

// (12:8) <Whatsapp>
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
		source: "(12:8) <Whatsapp>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div3;
	let div0;
	let h1;
	let t0;
	let t1;
	let div1;
	let img;
	let img_src_value;
	let t2;
	let div2;
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
			div3 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Tu compra se ha realizado exitosamente!!");
			t1 = space();
			div1 = element("div");
			img = element("img");
			t2 = space();
			div2 = element("div");
			create_component(whatsapp.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Tu compra se ha realizado exitosamente!!");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(whatsapp.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "md:text-4xl text-lg text-center text-gray-700 mt-8");
			add_location(h1, file, 5, 8, 174);
			attr_dev(div0, "class", "grid justify-center");
			add_location(div0, file, 4, 4, 132);
			if (img.src !== (img_src_value = "sloth.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "osito durmiendo");
			attr_dev(img, "width", "400");
			attr_dev(img, "height", "auto");
			add_location(img, file, 8, 8, 340);
			attr_dev(div1, "class", "grid justify-center");
			add_location(div1, file, 7, 4, 298);
			add_location(div2, file, 10, 4, 423);
			attr_dev(div3, "class", "grid grid-cols-1 content-center");
			add_location(div3, file, 3, 0, 82);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div3, t1);
			append_dev(div3, div1);
			append_dev(div1, img);
			append_dev(div3, t2);
			append_dev(div3, div2);
			mount_component(whatsapp, div2, null);
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
			if (detaching) detach_dev(div3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhY2lhcy4zM2RlNGY2Mi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
