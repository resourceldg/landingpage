import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, e as element, t as text, a as space, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as get_slot_context, p as get_slot_changes, q as transition_in, r as transition_out } from './client.fb594153.js';

/* src/components/carta/Whatsapp.svelte generated by Svelte v3.22.2 */

const file = "src/components/carta/Whatsapp.svelte";
const get_img_wsp_slot_changes = dirty => ({});
const get_img_wsp_slot_context = ctx => ({});
const get_text_wsp_slot_changes = dirty => ({});
const get_text_wsp_slot_context = ctx => ({});

// (14:30)  
function fallback_block_1(ctx) {
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

	const block = {
		c: function create() {
			h3 = element("h3");
			span0 = element("span");
			t0 = text("Qué estás esperando?");
			t1 = space();
			br0 = element("br");
			t2 = text("Ya podés tener tu catálogo de serivicos o productos listo para \n            pegar por toda tu tienda y además compartirla por cualquier medio digital. \n            ");
			span1 = element("span");
			t3 = text("Vendé como un profesional");
			t4 = space();
			br1 = element("br");
			t5 = text("\n            Si tenés dudas hacé click en el logo y escibinos...");
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			span0 = claim_element(h3_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Qué estás esperando?");
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(h3_nodes);
			br0 = claim_element(h3_nodes, "BR", {});
			t2 = claim_text(h3_nodes, "Ya podés tener tu catálogo de serivicos o productos listo para \n            pegar por toda tu tienda y además compartirla por cualquier medio digital. \n            ");
			span1 = claim_element(h3_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, "Vendé como un profesional");
			span1_nodes.forEach(detach_dev);
			t4 = claim_space(h3_nodes);
			br1 = claim_element(h3_nodes, "BR", {});
			t5 = claim_text(h3_nodes, "\n            Si tenés dudas hacé click en el logo y escibinos...");
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "font-bold text-2xl  ");
			add_location(span0, file, 14, 12, 343);
			add_location(br0, file, 15, 12, 418);
			attr_dev(span1, "class", "font-bold");
			add_location(span1, file, 17, 12, 588);
			add_location(br1, file, 17, 69, 645);
			attr_dev(h3, "class", "text-sm text-gray-700");
			add_location(h3, file, 13, 31, 296);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);
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
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block_1.name,
		type: "fallback",
		source: "(14:30)  ",
		ctx
	});

	return block;
}

// (24:29)               
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
			attr_dev(img, "class", "wsp object-fill svelte-vnq8fq");
			if (img.src !== (img_src_value = "wsp2.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo whatsapp");
			add_location(img, file, 24, 47, 872);
			attr_dev(a, "href", "https://wa.link/2wlo0v");
			add_location(a, file, 24, 13, 838);
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
		source: "(24:29)               ",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	const text_wsp_slot_template = /*$$slots*/ ctx[1].text_wsp;
	const text_wsp_slot = create_slot(text_wsp_slot_template, ctx, /*$$scope*/ ctx[0], get_text_wsp_slot_context);
	const text_wsp_slot_or_fallback = text_wsp_slot || fallback_block_1(ctx);
	const img_wsp_slot_template = /*$$slots*/ ctx[1].img_wsp;
	const img_wsp_slot = create_slot(img_wsp_slot_template, ctx, /*$$scope*/ ctx[0], get_img_wsp_slot_context);
	const img_wsp_slot_or_fallback = img_wsp_slot || fallback_block(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			if (text_wsp_slot_or_fallback) text_wsp_slot_or_fallback.c();
			t = space();
			div1 = element("div");
			if (img_wsp_slot_or_fallback) img_wsp_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (text_wsp_slot_or_fallback) text_wsp_slot_or_fallback.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (img_wsp_slot_or_fallback) img_wsp_slot_or_fallback.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "p-4 col-span-2");
			add_location(div0, file, 12, 4, 236);
			attr_dev(div1, "class", "grid col-start-3  mr-2");
			add_location(div1, file, 22, 4, 758);
			attr_dev(div2, "class", "grid md:grid-cols-3 bg-green-200 gap-4 rounded-bl place-items-center m-4 rounded-3xl");
			add_location(div2, file, 10, 0, 129);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);

			if (text_wsp_slot_or_fallback) {
				text_wsp_slot_or_fallback.m(div0, null);
			}

			append_dev(div2, t);
			append_dev(div2, div1);

			if (img_wsp_slot_or_fallback) {
				img_wsp_slot_or_fallback.m(div1, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (text_wsp_slot) {
				if (text_wsp_slot.p && dirty & /*$$scope*/ 1) {
					text_wsp_slot.p(get_slot_context(text_wsp_slot_template, ctx, /*$$scope*/ ctx[0], get_text_wsp_slot_context), get_slot_changes(text_wsp_slot_template, /*$$scope*/ ctx[0], dirty, get_text_wsp_slot_changes));
				}
			}

			if (img_wsp_slot) {
				if (img_wsp_slot.p && dirty & /*$$scope*/ 1) {
					img_wsp_slot.p(get_slot_context(img_wsp_slot_template, ctx, /*$$scope*/ ctx[0], get_img_wsp_slot_context), get_slot_changes(img_wsp_slot_template, /*$$scope*/ ctx[0], dirty, get_img_wsp_slot_changes));
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_wsp_slot_or_fallback, local);
			transition_in(img_wsp_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_wsp_slot_or_fallback, local);
			transition_out(img_wsp_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (text_wsp_slot_or_fallback) text_wsp_slot_or_fallback.d(detaching);
			if (img_wsp_slot_or_fallback) img_wsp_slot_or_fallback.d(detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Whatsapp> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Whatsapp", $$slots, ['text_wsp','img_wsp']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, $$slots];
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

export { Whatsapp as W };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNhcHAuNGQ3NDAwNjQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
