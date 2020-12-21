import { S as SvelteComponentDev, i as init, d as dispatch_dev, y as globals, s as safe_not_equal, z as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as attr_dev, j as add_location, l as insert_dev, m as append_dev, A as set_data_dev, q as query_selector_all, n as noop, B as destroy_each } from './client.4e71dbd2.js';

/* src/routes/articles/index.svelte generated by Svelte v3.22.2 */

const { console: console_1 } = globals;
const file = "src/routes/articles/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (28:1) {#each blogs as blog}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*blog*/ ctx[1].Title + "";
	let t0;
	let a_href_value;
	let t1;
	let p;
	let t2_value = (/*blog*/ ctx[1].Published, "DD-MM-YYYY") + "";
	let t2;
	let t3;
	let t4_value = /*blog*/ ctx[1].author.username + "";
	let t4;
	let t5;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = text(" ago by ");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, rel: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			t3 = claim_text(p_nodes, " ago by ");
			t4 = claim_text(p_nodes, t4_value);
			t5 = claim_space(p_nodes);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", "main-title svelte-d08w6i");
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "articles/" + /*blog*/ ctx[1].Slug);
			add_location(a, file, 32, 6, 582);
			add_location(li, file, 32, 2, 578);
			attr_dev(p, "class", "svelte-d08w6i");
			add_location(p, file, 33, 2, 671);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			append_dev(p, t3);
			append_dev(p, t4);
			append_dev(p, t5);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*blogs*/ 1 && t0_value !== (t0_value = /*blog*/ ctx[1].Title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*blogs*/ 1 && a_href_value !== (a_href_value = "articles/" + /*blog*/ ctx[1].Slug)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*blogs*/ 1 && t2_value !== (t2_value = (/*blog*/ ctx[1].Published, "DD-MM-YYYY") + "")) set_data_dev(t2, t2_value);
			if (dirty & /*blogs*/ 1 && t4_value !== (t4_value = /*blog*/ ctx[1].author.username + "")) set_data_dev(t4, t4_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(28:1) {#each blogs as blog}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let each_value = /*blogs*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("recent posts");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ln829j\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "recent posts");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "articles";
			add_location(h1, file, 24, 0, 309);
			attr_dev(ul, "class", "svelte-d08w6i");
			add_location(ul, file, 26, 0, 332);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*blogs*/ 1) {
				each_value = /*blogs*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
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
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
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
	let { blogs } = $$props;
	const writable_props = ["blogs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Articles> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Articles", $$slots, []);

	$$self.$set = $$props => {
		if ("blogs" in $$props) $$invalidate(0, blogs = $$props.blogs);
	};

	$$self.$capture_state = () => ({ preload, blogs });

	$$self.$inject_state = $$props => {
		if ("blogs" in $$props) $$invalidate(0, blogs = $$props.blogs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [blogs];
}

class Articles extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blogs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Articles",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blogs*/ ctx[0] === undefined && !("blogs" in props)) {
			console_1.warn("<Articles> was created without expected prop 'blogs'");
		}
	}

	get blogs() {
		throw new Error("<Articles>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blogs(value) {
		throw new Error("<Articles>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Articles;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDUzMmRlYWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aWNsZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdCAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGJsb2dzO1xuPC9zY3JpcHQ+XG48c3R5bGU+XG5cdHVsLCBwIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG5cblx0Lm1haW4tdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+YXJ0aWNsZXM8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPnJlY2VudCBwb3N0czwvaDE+XG5cbjx1bD5cblx0eyNlYWNoIGJsb2dzIGFzIGJsb2d9XG5cdFx0PCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG5cdFx0PGxpPjxhIGNsYXNzPVwibWFpbi10aXRsZVwiIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J2FydGljbGVzL3tibG9nLlNsdWd9Jz57YmxvZy5UaXRsZX08L2E+PC9saT5cblx0XHQ8cD4ge2Jsb2cuUHVibGlzaGVkLCBcIkRELU1NLVlZWVlcIn0gYWdvIGJ5IHtibG9nLmF1dGhvci51c2VybmFtZX0gPC9wPlxuXHR7L2VhY2h9XG48L3VsPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBZ0N3RSxHQUFJLElBQUMsS0FBSzs7Ozs7MEJBQzNFLEdBQUksSUFBQyxTQUFTLEVBQUUsWUFBWTs7O3lCQUFVLEdBQUksSUFBQyxNQUFNLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBRE4sR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFBSSxHQUFJLElBQUMsS0FBSzs7c0ZBQXZCLEdBQUksSUFBQyxJQUFJOzs7O2lFQUM3RCxHQUFJLElBQUMsU0FBUyxFQUFFLFlBQVk7Z0VBQVUsR0FBSSxJQUFDLE1BQU0sQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFOekQsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTFCVSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87Q0FDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPOzs7O09BS1YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
