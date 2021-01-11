import { S as SvelteComponentDev, i as init, d as dispatch_dev, B as globals, s as safe_not_equal, C as validate_each_argument, v as validate_slots, e as element, t as text, a as space, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, l as add_location, k as attr_dev, m as insert_dev, n as append_dev, D as set_data_dev, A as query_selector_all, z as noop, E as destroy_each } from './client.09e717a5.js';

/* src/routes/articles/[slug].svelte generated by Svelte v3.22.2 */

const { console: console_1 } = globals;
const file = "src/routes/articles/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (51:0) {#each post as post}
function create_each_block(ctx) {
	let h2;
	let t0_value = /*post*/ ctx[0].Title + "";
	let t0;
	let t1;
	let h3;
	let t2_value = /*post*/ ctx[0].Published + "";
	let t2;
	let t3;
	let t4_value = /*post*/ ctx[0].author.username + "";
	let t4;
	let t5;
	let div;
	let raw_value = /*post*/ ctx[0].Body + "";

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			h3 = element("h3");
			t2 = text(t2_value);
			t3 = text(" by ");
			t4 = text(t4_value);
			t5 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, t2_value);
			t3 = claim_text(h3_nodes, " by ");
			t4 = claim_text(h3_nodes, t4_value);
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 55, 2, 1195);
			add_location(h3, file, 56, 2, 1219);
			attr_dev(div, "class", "content svelte-gnxal1");
			add_location(div, file, 58, 2, 1274);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t2);
			append_dev(h3, t3);
			append_dev(h3, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post*/ 1 && t0_value !== (t0_value = /*post*/ ctx[0].Title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*post*/ 1 && t2_value !== (t2_value = /*post*/ ctx[0].Published + "")) set_data_dev(t2, t2_value);
			if (dirty & /*post*/ 1 && t4_value !== (t4_value = /*post*/ ctx[0].author.username + "")) set_data_dev(t4, t4_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].Body + "")) div.innerHTML = raw_value;		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(51:0) {#each post as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let p;
	let t2;
	let a;
	let t3;
	let each_value = /*post*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			p = element("p");
			t2 = text("⇺");
			a = element("a");
			t3 = text("back to articles");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10e89u2\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "⇺");
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "back to articles");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "an amazing article";
			attr_dev(a, "href", "articles");
			add_location(a, file, 63, 4, 1336);
			add_location(p, file, 63, 0, 1332);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			append_dev(p, a);
			append_dev(a, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1) {
				each_value = /*post*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t1.parentNode, t1);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
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

function preload(page, session) {
	console.log(session);
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmIyNTJmYjIwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FydGljbGVzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcblx0ICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgcG9zdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cblx0LmNvbnRlbnQgOmdsb2JhbChoMikge1xuXHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuXHRcdHBhZGRpbmc6IDAuNWVtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHVsKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwobGkpIHtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5hbiBhbWF6aW5nIGFydGljbGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxueyNlYWNoIHBvc3QgYXMgcG9zdH1cblx0XHQ8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cblx0XHQ8aDI+e3Bvc3QuVGl0bGV9PC9oMj5cblx0XHQ8aDM+e3Bvc3QuUHVibGlzaGVkfSBieSB7cG9zdC5hdXRob3IudXNlcm5hbWV9PC9oMz5cblxuXHRcdDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuXHR7QGh0bWwgcG9zdC5Cb2R5fSA8L2Rpdj5cblxuey9lYWNofVxuXG48cD7ih7o8YSBocmVmPVwiYXJ0aWNsZXNcIj4gYmFjayB0byBhcnRpY2xlczwvYT48L3A+XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3lCQXVETyxHQUFJLElBQUMsS0FBSzs7Ozt5QkFDVixHQUFJLElBQUMsU0FBUzs7O3lCQUFNLEdBQUksSUFBQyxNQUFNLENBQUMsUUFBUTs7OzswQkFHdkMsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBSlYsR0FBSSxJQUFDLEtBQUs7K0RBQ1YsR0FBSSxJQUFDLFNBQVM7K0RBQU0sR0FBSSxJQUFDLE1BQU0sQ0FBQyxRQUFRO2lFQUd2QyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFUVixHQUFJOzs7O2dDQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBakRXLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztDQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7T0FLVixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
