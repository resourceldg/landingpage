import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as stores$1, G as validate_store, H as component_subscribe, v as validate_slots, J as goto, e as element, t as text, b as claim_element, f as children, g as claim_text, h as detach_dev, l as add_location, m as insert_dev, n as append_dev, D as set_data_dev, a as space, M as empty, j as claim_space, k as attr_dev, N as set_input_value, O as run_all, K as listen_dev, P as prevent_default, z as noop, L as set_store_value } from './client.3d802c62.js';

/* src/routes/login.svelte generated by Svelte v3.22.2 */
const file = "src/routes/login.svelte";

// (41:0) {#if error}
function create_if_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(/*error*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, /*error*/ ctx[2]);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 41, 4, 1132);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 4) set_data_dev(t, /*error*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(41:0) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let form;
	let label0;
	let t0;
	let input0;
	let t1;
	let label1;
	let t2;
	let input1;
	let t3;
	let button;
	let t4;
	let t5;
	let p;
	let t6;
	let span;
	let a;
	let t7;
	let t8;
	let if_block_anchor;
	let dispose;
	let if_block = /*error*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			form = element("form");
			label0 = element("label");
			t0 = text("Email: ");
			input0 = element("input");
			t1 = space();
			label1 = element("label");
			t2 = text("Password: ");
			input1 = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Login");
			t5 = space();
			p = element("p");
			t6 = text("Sin aún no estás registrado,ven por ");
			span = element("span");
			a = element("a");
			t7 = text("Aquí");
			t8 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { method: true });
			var form_nodes = children(form);
			label0 = claim_element(form_nodes, "LABEL", {});
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Email: ");
			input0 = claim_element(label0_nodes, "INPUT", { type: true });
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", {});
			var label1_nodes = children(label1);
			t2 = claim_text(label1_nodes, "Password: ");
			input1 = claim_element(label1_nodes, "INPUT", { type: true });
			label1_nodes.forEach(detach_dev);
			t3 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, onclick: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Login");
			button_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			p = claim_element(form_nodes, "P", {});
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "Sin aún no estás registrado,ven por ");
			span = claim_element(p_nodes, "SPAN", {});
			var span_nodes = children(span);
			a = claim_element(span_nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, "Aquí");
			a_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(input0, "type", "email");
			add_location(input0, file, 34, 19, 834);
			add_location(label0, file, 34, 4, 819);
			attr_dev(input1, "type", "password");
			add_location(input1, file, 35, 22, 907);
			add_location(label1, file, 35, 4, 889);
			attr_dev(button, "type", "submit");
			attr_dev(button, "onclick", "submit");
			add_location(button, file, 36, 4, 968);
			attr_dev(a, "href", "signup");
			add_location(a, file, 37, 49, 1069);
			add_location(span, file, 37, 43, 1063);
			add_location(p, file, 37, 4, 1024);
			attr_dev(form, "method", "post");
			add_location(form, file, 33, 0, 755);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, form, anchor);
			append_dev(form, label0);
			append_dev(label0, t0);
			append_dev(label0, input0);
			set_input_value(input0, /*email*/ ctx[1]);
			append_dev(form, t1);
			append_dev(form, label1);
			append_dev(label1, t2);
			append_dev(label1, input1);
			set_input_value(input1, /*password*/ ctx[0]);
			append_dev(form, t3);
			append_dev(form, button);
			append_dev(button, t4);
			append_dev(form, t5);
			append_dev(form, p);
			append_dev(p, t6);
			append_dev(p, span);
			append_dev(span, a);
			append_dev(a, t7);
			insert_dev(target, t8, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[6]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[7]),
				listen_dev(form, "submit", prevent_default(/*handleLogin*/ ctx[4]), false, true, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 2 && input0.value !== /*email*/ ctx[1]) {
				set_input_value(input0, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 1 && input1.value !== /*password*/ ctx[0]) {
				set_input_value(input1, /*password*/ ctx[0]);
			}

			if (/*error*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			if (detaching) detach_dev(t8);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			run_all(dispose);
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
	let $session;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(5, $session = value));
	let password = "";
	let email = "";
	let error;

	const handleLogin = async () => {
		const response = await fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({ email, password })
		});

		const parsed = await response.json();

		if (parsed.error) {
			$$invalidate(2, error = parsed.error);
		} else {
			set_store_value(session, $session.token = parsed.token, $session);
			set_store_value(session, $session.user = parsed.user, $session);
			goto("/profile");
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Login", $$slots, []);

	function input0_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(0, password);
	}

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		session,
		password,
		email,
		error,
		handleLogin,
		$session
	});

	$$self.$inject_state = $$props => {
		if ("password" in $$props) $$invalidate(0, password = $$props.password);
		if ("email" in $$props) $$invalidate(1, email = $$props.email);
		if ("error" in $$props) $$invalidate(2, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		password,
		email,
		error,
		session,
		handleLogin,
		$session,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uM2FlZGQxNmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZ290bywgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuICAgIGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XG5cbiAgICBsZXQgcGFzc3dvcmQgPSAnJztcbiAgICBsZXQgZW1haWwgPSAnJztcbiAgICBsZXQgZXJyb3I7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2xvZ2luJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmIChwYXJzZWQuZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gcGFyc2VkLmVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNlc3Npb24udG9rZW4gPSBwYXJzZWQudG9rZW47XG4gICAgICAgICAgICAkc2Vzc2lvbi51c2VyID0gcGFyc2VkLnVzZXI7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZ290bygnL3Byb2ZpbGUnKTtcbiAgICAgICB9IFxuICAgIH07XG4gICAgXG48L3NjcmlwdD5cblxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVMb2dpbn0gbWV0aG9kPVwicG9zdFwiPlxuICAgIDxsYWJlbD4gRW1haWw6IDxpbnB1dCB0eXBlPVwiZW1haWxcIiBiaW5kOnZhbHVlPXtlbWFpbH0gLz4gPC9sYWJlbD5cbiAgICA8bGFiZWw+IFBhc3N3b3JkOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9IC8+IDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25jbGljaz1zdWJtaXQ+TG9naW48L2J1dHRvbj5cbiAgICA8cD5TaW4gYcO6biBubyBlc3TDoXMgcmVnaXN0cmFkbyx2ZW4gcG9yIDxzcGFuPjxhIGhyZWY9J3NpZ251cCc+QXF1w608L2E+PC9zcGFuPiA8L3A+XG48L2Zvcm0+XG5cbnsjaWYgZXJyb3J9XG4gICAgPHA+e2Vycm9yfTwvcD5cbnsvaWZ9XG5cbiJdLCJuYW1lcyI6WyJzdG9yZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7c0JBeUNRLEdBQUs7Ozs7OztxQ0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7c0RBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQURSLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBTnlDLEdBQUs7Ozs7O3dDQUNDLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFGakMsR0FBVzs7Ozt5REFDUSxHQUFLO3NDQUFMLEdBQUs7OzsrREFDQyxHQUFRO3lDQUFSLEdBQVE7OztpQkFLNUQsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXRDRSxPQUFPLEtBQUtBLFFBQU07OztLQUV0QixRQUFRLEdBQUcsRUFBRTtLQUNiLEtBQUssR0FBRyxFQUFFO0tBQ1YsS0FBSzs7T0FFSCxXQUFXO1FBQ1AsUUFBUSxTQUFTLEtBQUssQ0FBQyxRQUFRO0dBQ2pDLE1BQU0sRUFBRSxNQUFNO0dBQ2QsT0FBTztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEMsTUFBTSxFQUFFLGtCQUFrQjs7R0FFOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFLFFBQVE7OztRQUdwQyxNQUFNLFNBQVMsUUFBUSxDQUFDLElBQUk7O01BRTlCLE1BQU0sQ0FBQyxLQUFLO21CQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSzs7NEJBRXBCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7NEJBQzdCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7R0FHM0IsSUFBSSxDQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0VBT3dCLEtBQUs7Ozs7O0VBQ0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
